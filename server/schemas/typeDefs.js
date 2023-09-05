// schemas/typeDefs.js
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
    information: Information!
    education: Education!
    experience: [Experience]
    skills: [Skills]
    user: User!
  }

  type Education {
    _id: ID
    institution: String
    degree: String
    startDate: String
    endDate: String
  }

  type Experience {
    _id: ID
    company: String
    position: String
    startDate: String
    endDate: String
  }

  type Skills {
    _id: ID
    skill: String
  }

  type Auth {
    token: ID!
    user: User!
  }

  type Information {
    _id: ID
    firstName: String
    lastName: String
    email: String
    phone: String
    address: String
  }

  input ResumeInput {
    information: InformationInput!
    education: EducationInput
    experience: [ExperienceInput]
    skills: [SkillsInput]
  }

  input InformationInput {
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

  input SkillsInput {
    skill: String
  }

  type Query {
    users: [User]
    user(username: String!): User
    me: User
    resumes: [Resume]
    resume(resumeId: ID!): Resume
    education: Education
    experience: Experience
    skills: Skills
    information: Information
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    createResume(resumeInput: ResumeInput!): Resume
    createEducation(institution: String!, degree: String!, startDate: String!, endDate: String! ): Education
    createExperience(company: String!, position: String!, startDate: String!, endDate: String!): Experience
    createSkills(skill: String!): Skills
    updateInformation(informationInput: InformationInput!): Information
    createInformation(firstname: String!, lastName: String!, email: String!, phone: String!, address: String! ): Information
  }
`;

module.exports = typeDefs;
