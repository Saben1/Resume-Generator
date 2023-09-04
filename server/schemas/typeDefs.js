const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    resumes: [Resume]
  }

  type Resume {
    _id: ID!
    personalinfo: Personalinfo!
    education: [Education]
    experience: [Experience]
    skills: [String]
    user: User!
  }

  type Education {
    _id: ID!
    institution: String!
    degree: String!
    startDate: String!
    endDate: String
  }

  type Experience {
    _id: ID!
    company: String!
    position: String!
    startDate: String!
    endDate: String
  }

  type Auth {
    token: ID!
    user: User!
  }

  type Personalinfo {
    firstName: String!
    lastName: String!
    email: String!
    phone: String!
    address: String
  }

  input ResumeInput {
    personalinfo: PersonalinfoInput!
    education: [EducationInput]
    experience: [ExperienceInput]
    skills: [String]
  }

  input PersonalinfoInput {
    firstName: String!
    lastName: String!
    email: String!
    phone: String!
    address: String
  }

  input EducationInput {
    institution: String!
    degree: String!
    startDate: String!
    endDate: String
  }

  input ExperienceInput {
    company: String!
    position: String!
    startDate: String!
    endDate: String
  }

  type Query {
    users: [User]
    user(username: String!): User
    me: User
    resume(resumeId: ID!): Resume
    resumes: [Resume]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    createResume(resumeInput: ResumeInput!): Resume
  }
`;

module.exports = typeDefs;
