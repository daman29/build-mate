const { AuthenticationError } = require("apollo-server-express");
const { User, Project, Task, Teammate } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ email: context.user.email });
      }
      throw new AuthenticationError("You must be signed in");
    },
    project: async (parent, { _id }, context) => {
      const project = await Project.findById(_id);

      if (!project) {
        throw new AuthenticationError("No Project with the given ID");
      }

      if (project.owner === context.user._id) {
        return project;
      }

      throw new AuthenticationError(
        "Please login as the project owner to access this project"
      );
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
