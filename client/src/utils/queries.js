import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      resumes {
        _id
        information {
          fullName
        }
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      resumes {
        _id
        information {
          fullName
        }
      }
    }
  }
`;

export const QUERY_SINGLE_RESUME = gql`
  query resume($resumeId: ID!) {
    resume(resumeId: $resumeId) {
      _id
      username
      information {
        fullName
        dateOfBirth
        aboutMe
        contactNumber
      }
      educations {
        school
        degree
        year
      }
      experiences {
        company
        position
        year
      }
    }
  }
`;

// Define more queries as needed
