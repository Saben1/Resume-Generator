const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const User = require('../models/user'); // Adjust the path based on your project structure
const Resume = require('../models/resume'); // Adjust the path based on your project structure

const resolvers = {
  Query: {
    getUser: async (parent, { userId }) => {
      return await User.findById(userId);
    },
    getAllResumes: async () => {
      return await Resume.find();
    },
  },
  Mutation: {
    createUser: async (parent, { username, email, password }) => {
      const newUser = new User({
        username,
        email,
        password,
        // Other user properties...
      });
      return await newUser.save();
    },
    createResume: async (parent, { userId, contact_information, education, work_experience, skills }) => {
      const newResume = new Resume({
        user: userId,
        contact_information,
        education,
        work_experience,
        skills,
      });
      return await newResume.save();
    },
    loginUser: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user with this email found');
      }

      const correctPassword = await user.isCorrectPassword(password);

      if (!correctPassword) {
        throw new AuthenticationError('Incorrect password');
      }

      const token = signToken(user); // Generate token
      return { user, token };
    },
  },
};

module.exports = resolvers;
