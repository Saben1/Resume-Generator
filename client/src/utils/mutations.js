import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        email
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation AddUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const CREATE_RESUME = gql`
  mutation CreateResume($resumeInput: ResumeInput!) {
    createResume(resumeInput: $resumeInput) {
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
