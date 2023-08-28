const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
    information: Information
    educations: [Education]
    experiences: [Experience]
  }

  type Information {
    _id: ID
    fullName: String!
    email: String!
    dateOfBirth: String!
    aboutMe: String
    contactNumber: String
  }

  type Education {
    _id: ID
    school: String!
    degree: String!
    year: Int!
  }

  type Experience {
    _id: ID
    company: String!
    position: String!
    year: Int!
  }

  type Auth {
    token: String!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    createResume(
      informationData: InformationInput!
      educationData: [EducationInput!]!
      experienceData: [ExperienceInput!]!
    ): User
  }

  input InformationInput {
    fullName: String!
    email: String!
    dateOfBirth: String!
    aboutMe: String
    contactNumber: String
  }

  input EducationInput {
    school: String!
    degree: String!
    year: Int!
  }

  input ExperienceInput {
    company: String!
    position: String!
    year: Int!
  }
`;

module.exports = typeDefs;
