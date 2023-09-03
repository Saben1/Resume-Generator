import { gql } from '@apollo/client';

// Query to fetch the logged-in user's data
export const GET_ME = gql`
  query me {
    me {
      _id
      username
      email
    }
  }
`;

// Query to fetch all users
export const GET_USERS = gql`
  query users {
    users {
      _id
      username
      email
    }
  }
`;

// Query to fetch a single user by their username
export const GET_USER_BY_USERNAME = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
    }
  }
`;

// Query to fetch all resumes
export const GET_RESUMES = gql`
  query resumes {
    resumes {
      _id
      title
      user {
        _id
        username
      }
    }
  }
`;

// Query to fetch a single resume by its ID
export const GET_RESUME_BY_ID = gql`
  query resume($resumeId: ID!) {
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
        description
      }
      skills
      user {
        _id
        username
      }
    }
  }
`;
