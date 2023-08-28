const { gql } = require('apollo-server');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    educations: [Education]
    experiences: [Experience]
  }

  type Education {
    _id: ID
    school: String
    degree: String
    fieldOfStudy: String
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

  type Query {
    getUser(username: String!): User
    getEducation(_id: ID!): Education
    getExperience(_id: ID!): Experience
  }

  type Mutation {
    createUser(username: String!, email: String!): User
    createEducation(
      school: String!
      degree: String!
      fieldOfStudy: String!
      startDate: String!
      endDate: String!
    ): Education
    createExperience(
      company: String!
      position: String!
      startDate: String!
      endDate: String!
    ): Experience
  }
`;

module.exports = typeDefs;
