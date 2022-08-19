const { AuthenticationError } = require("apollo-server-express");
const { User, Project, Task, Teammate } = require("../models");
const { signToken } = require("../utils/auth");
const taskGenerator = require("../utils/taskGenerator");

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
        }).populate('assigneeId').sort({startDate: 1});

        if (!project) {
          throw new AuthenticationError("No Project with the given ID");
        }

        return { project, tasks };
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
          throw new Error("You don't have any teammates yet");
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
    addProject: async (parent, args, context) => {
      
      if (!context.user) {
        throw new AuthenticationError(
          "Please login before creating new project"
        );
      }
      args.owner = context.user._id;

      const project = await Project.create({ ...args });
      console.log(project);

      const tasks = taskGenerator(
        project.startDate,
        project._id,
        project.councilApproval,
        project.storeys,
        project.structure
      );

      return { project, tasks };
    },
    addTeam: async (parent, args, context) => {
      if (!context.user) {
        throw new AuthenticationError(
          "Please login before creating new project"
        );
      }
      args.teamLeadId = context.user._id;

      const teammate = await Teammate.create({ ...args });

      const user = await User.findOne({ _id: context.user._id });
      const projects = await Project.find({ owner: user._id });
      const team = await Teammate.find({ teamLeadId: user._id });

      return { user, projects, team };
    },
  },
};

module.exports = resolvers;
