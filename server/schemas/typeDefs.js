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
    education: [Education]
    experience: [Experience]
    skills: [Skills]
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

  type Skills {
    _id: ID!
    name: String!
  }

  type Auth {
    token: ID!
    user: User!
  }

  type Information {
    firstName: String!
    lastName: String!
    email: String!
    phone: String!
    address: String
  }

  input ResumeInput {
    information: InformationInput!
    education: [EducationInput]
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
    name: String!
  }

  type Query {
    users: [User]
    user(username: String!): User
    me: User
    resumes: [Resume]
    resume(resumeId: ID!): Resume
    educations: [Education]
    education(educationId: ID!): Education
    experiences: [Experience]
    experience(experienceId: ID!): Experience
    skills: [Skills]
    information: Information
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    createResume(resumeInput: ResumeInput!): Resume
    createEducation(educationInput: EducationInput!): Education
    createExperience(experienceInput: ExperienceInput!): Experience
    createSkills(skillsInput: SkillsInput!): Skills
    updateInformation(informationInput: InformationInput!): Information
  }
`;

module.exports = typeDefs;
