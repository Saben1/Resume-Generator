import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
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
  mutation createResume($educationData: [EducationInput!]!, $experienceData: [ExperienceInput!]!, $informationData: InformationInput!) {
    createResume(educationData: $educationData, experienceData: $experienceData, informationData: $informationData) {
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
