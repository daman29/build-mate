const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    company: String
  }

  type Project {
    _id: ID
    name: String
    address: String
    startDate: String
    storeys: Int
    councilApproval: Boolean
    owner: User
    wallType: String
    wallType2nd: String
    roofType: String
    structure: String
  }

  type Teammate {
    _id: ID
    name: String
    role: String
    phoneNumber: String
    email: String
    teamLeadId: User
  }

  type Task {
    _id: ID
    name: String
    description: String
    startDate: String
    endDate: String
    predecessor: Task
    successor: Task
    projectId: Project
    assigneeId: Teammate
    priority: String
  }

  type FullProject {
    project: Project
    tasks: [Task]
  }

  type Profile {
    user: User
    projects: [Project]
    team: [Teammate]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    me: User
    project(_id: ID!): FullProject
    projects: [Project]
    team: [Teammate]
    profile: Profile
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addProject(
      name: String!
      address: String!
      startDate: String!
      storeys: Int!
      councilApproval: Boolean!
      owner: ID!
      wallType: String
      wallType2nd: String
      roofType: String
      structure: String!
    ): FullProject
    addTask(
      name: String!
      description: String
      startDate: String!
      endDate: String!
      predecessor: ID
      successor: ID
      projectId: ID!
      assigneeId: ID
      priority: String
    ): Task
    addTeam(
      name: String!
      role: String!
      phoneNumber: String!
      email: String
      teamLeadId: ID!
    ): Profile
    assignTeammate(taskId: ID!, assigneeId: ID!): Task
  }
`;

module.exports = typeDefs;
