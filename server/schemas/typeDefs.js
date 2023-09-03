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
    title: String!
    personalinfo: [Personalinfo]
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
    description: String
  }

  type Auth {
    token: ID!
    user: User!
  }

  input ResumeInput {
    title: String!
    education: [EducationInput]
    experience: [ExperienceInput]
    skills: [String]
  }

  input Personalinfo{
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
    description: String
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
    createPersonalinfo(personalinfoInput: PersonalinfoInput!): Personalinfo
    createEducation(educationInput: EducationInput!): Education
    createExperience(experienceInput: ExperienceInput!): Experience
    createSkills(skillsInput: SkillsInput!): Skills
  }
`;

module.exports = typeDefs;
