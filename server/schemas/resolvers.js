const { AuthenticationError } = require('apollo-server-express');
const { User, Resume } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('resume'); // Assuming User has a reference to Resume
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('resume'); // Assuming User has a reference to Resume
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('resume'); // Assuming User has a reference to Resume
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    // Add a query to fetch a single resume by ID
    resume: async (parent, { resumeId }) => {
      return Resume.findOne({ _id: resumeId });
    },
    // Add a query to fetch all resumes
    resumes: async () => {
      return Resume.find();
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    // Add a mutation to create a resume
    createResume: async (parent, { resumeInput }, context) => {
      if (context.user) {
        const resume = await Resume.create({
          ...resumeInput,
          user: context.user._id,
        });

        return resume;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;
