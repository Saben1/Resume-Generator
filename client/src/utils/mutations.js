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

// Mutation to create personal information
export const CREATE_PERSONALINFO = gql`
  mutation createPersonalInfo($input: PersonalInfoInput!) {
    createPersonalInfo(input: $input) {
      _id
      firstName
      lastName
      email
      phone
      address
    }
  }
`;

// Mutation to create skills
export const CREATE_SKILLS = gql`
  mutation createSkills($input: [String!]!) {
    createSkills(input: $input) {
      _id
      skills
    }
  }
`;

// Mutation to create education
export const CREATE_EDUCATION = gql`
  mutation createEducation($input: [EducationInput!]!) {
    createEducation(input: $input) {
      _id
      education {
        institution
        degree
        startDate
        endDate
      }
    }
  }
`;

// Mutation to create experience
export const CREATE_EXPERIENCE = gql`
  mutation createExperience($input: [ExperienceInput!]!) {
    createExperience(input: $input) {
      _id
      experience {
        company
        position
        startDate
        endDate
        description
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
      personalinformation {
        _id
        firstName
        lastName
        email
        phone
        address

      }
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
        personalinformation: $personalinformation
        education: $education
        experience: $experience
        skills: $skills
      }
    ) {
      _id
      title
      personalinformation {
        _id
        firstName
        lastName
        email
        phone
        address
      }
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
