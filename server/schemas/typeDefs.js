const { gql } = require('apollo-server-express');

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
    startDate: String
    endDate: String
    predecessor: ID
    successor: Task
    projectId: Project
    assigneeId: Teammate
    priority: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    me: User
    project(_id: ID!): Project
    projects(user: ID): [Project]
    team(user: ID): [Teammate] 
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
