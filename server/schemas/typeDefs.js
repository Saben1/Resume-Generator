const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    user_id: ID!
    username: String!
    email: String!
    created_at: String!
  }

  type Resume {
    resume_id: ID!
    user_id: ID!
    title: String!
    content: String
    created_at: String!
    updated_at: String
  }

  type SavedResume {
    saved_id: ID!
    user_id: ID!
    resume_id: ID!
    saved_at: String!
  }

  type Query {
    getUser(userId: ID!): User
    getResume(resumeId: ID!): Resume
    getAllResumes: [Resume]
    getSavedResumes(userId: ID!): [SavedResume]
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): User
    createResume(userId: ID!, title: String!, content: String): Resume
    updateResume(resumeId: ID!, title: String, content: String): Resume
    deleteResume(resumeId: ID!): Boolean
    saveResume(userId: ID!, resumeId: ID!): SavedResume
    unsaveResume(savedId: ID!): Boolean
    loginUser(email: String!, password: String!): AuthData
  }

  type AuthData {
    user: User!
    token: String!
  }
`;

module.exports = typeDefs;
