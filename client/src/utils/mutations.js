import { gql } from '@apollo/client';

// Mutation to log in a user
export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
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

// Mutation to add a user
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

// Mutation to create a new resume
export const CREATE_RESUME = gql`
  mutation createResume($title: String!, $objective: String, $education: [EducationInput], $experience: [ExperienceInput], $skills: [String]) {
    createResume(resumeInput: {
      title: $title
      objective: $objective
      education: $education
      experience: $experience
      skills: $skills
    }) {
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

// Mutation to update an existing resume
export const UPDATE_RESUME = gql`
  mutation updateResume(
    $resumeId: ID!
    $title: String
    $objective: String
    $education: [EducationInput]
    $experience: [ExperienceInput]
    $skills: [String]
  ) {
    updateResume(
      resumeId: $resumeId
      resumeInput: {
        title: $title
        objective: $objective
        education: $education
        experience: $experience
        skills: $skills
      }
    ) {
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

// Mutation to delete a resume
export const DELETE_RESUME = gql`
  mutation deleteResume($resumeId: ID!) {
    deleteResume(resumeId: $resumeId) {
      _id
      title
    }
  }
`;
