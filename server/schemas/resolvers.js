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
      if (context.user) {
        const project = await Project.findById(_id).populate("owner");
        const tasks = await Task.find({
          projectId: _id,
        });
        if (!project) {
          throw new AuthenticationError("No Project with the given ID");
        }

        if (project.owner === context.user._id) {
          return { project, tasks };
        }
      }

      throw new AuthenticationError(
        "Please login as the project owner to access this project"
      );
    },
    projects: async (parent, args, context) => {
      return Project.find().populate("owner");
    },
    team: async (parent, args, context) => {
      if (context.user) {
        const teammates = await Teammate.find({
          teamLeadId: context.user._id,
        }).populate("teamLeadId");

        if (!teammates) {
          throw new AuthenticationError("You don't have any teammates yet");
        }
        return teammates;
      }

      throw new AuthenticationError("Please login to view your team");
    },
    profile: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findOne({ _id: context.user._id });

        if (!user) {
          throw new AuthenticationError("Couldn't find user with this id");
        }

        const projects = await Project.find({ owner: user._id });
        const team = await Teammate.find({ teamLeadId: user._id });

        return { user, projects, team };
      }

      throw new AuthenticationError("Please login to view your profile data");
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
