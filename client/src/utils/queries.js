import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  query Me {
    me {
      _id
      username
      email
    }
  }
`;

export const QUERY_DASHBOARD = gql`
  query Profile {
    profile {
      user {
        _id
        username
        email
        company
      }
      projects {
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
      team {
        _id
        name
        role
        phoneNumber
        email
        teamLeadId {
          _id
          username
          email
        }
      }
    }
  }
`;

export const QUERY_PROJECT = gql`
  query project($project: ID) {
    project(_id: $project) {
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
        predecessor {
          _id
        }
        successor {
          _id
        }
        assigneeId {
          _id
          name
          role
          phoneNumber
          email
        }
        priority
      }
    }
  }
`;
