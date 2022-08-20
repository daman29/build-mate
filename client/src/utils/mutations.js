import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation AddUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const ADD_PROJECT = gql`
  mutation AddProject(
    $name: String!
    $address: String!
    $startDate: String!
    $storeys: Int!
    $councilApproval: Boolean!
    $owner: ID!
    $wallType: String
    $wallType2nd: String
    $roofType: String
    $structure: String!
  ) {
    addProject(
      name: $name
      address: $address
      startDate: $startDate
      storeys: $storeys
      councilApproval: $councilApproval
      owner: $owner
      wallType: $wallType
      wallType2nd: $wallType2nd
      roofType: $roofType
      structure: $structure
    ) {
      project {
        _id
        name
        address
        startDate
        storeys
        councilApproval
        owner {
          _id
          username
          email
        }
        wallType
        wallType2nd
        roofType
        structure
      }
      tasks {
        _id
        name
        description
        startDate
        endDate
      }
    }
  }
`;

export const ASSIGN_TEAMMATE = gql`
  mutation assignTeammate($taskId: ID!, $assigneeId: ID!) {
    assignTeammate(taskId: $taskId, assigneeId: $assigneeId) {
      name
    }
  }
`;

export const ADD_TASK = gql`
  mutation addTask(
    $name: String!
    $description: String
    $startDate: String!
    $endDate: String!
    $projectId: ID!
    $assigneeId: ID
  ) {
    addTask(
      name: $name
      description: $description
      startDate: $startDate
      endDate: $endDate
      projectId: $projectId
      assigneeId: $assigneeId
    ) {
      name
    }
  }
`;
