import { gql } from '@apollo/client';
// export const QUERY_USER = gql`
//   query user($username: String!) {
//     user(username: $username) {
//       _id
//       username
//       email
//       thoughts {
//         _id
//         thoughtText
//         createdAt
//       }
//     }
//   }
// `;
export const QUERY_USER = gql`
  query getUser($username: String!) {
    user(username: $username) {
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

export const GET_USERS = gql`
  query getUsers {
    users {
      _id
      username
      information {
        fullName
      }
    }
  }
`;
export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
    }
  }
`;
