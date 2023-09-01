import { gql } from '@apollo/client';

// Query to get user by username, including resume data
export const GET_USER_BY_USERNAME = gql`
  query GetUserByUsername($username: String!) {
    user(username: $username) {
      _id
      username
      email
      resume {
        _id
        title
        objective
        education {
          _id
          institution
          degree
          startDate
          endDate
        }
        experience {
          _id
          company
          position
          startDate
          endDate
        }
        skills
      }
    }
  }
`;

// Query to get a specific resume by its ID
export const GET_RESUME_BY_ID = gql`
  query GetResumeById($resumeId: ID!) {
    resume(resumeId: $resumeId) {
      _id
      title
      objective
      education {
        _id
        institution
        degree
        startDate
        endDate
      }
      experience {
        _id
        company
        position
        startDate
        endDate
      }
      skills
    }
  }
`;

// Query to get the currently authenticated user's resume
export const GET_MY_RESUME = gql`
  query GetMyResume {
    me {
      _id
      username
      resume {
        _id
        title
        objective
        education {
          _id
          institution
          degree
          startDate
          endDate
        }
        experience {
          _id
          company
          position
          startDate
          endDate
        }
        skills
      }
    }
  }
`;