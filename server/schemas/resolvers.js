const { AuthenticationError, UserInputError } = require('apollo-server-express');
const {
  User,
  Resume,
  Education,
  Experience,
  Skills,
  Information, // Updated model name
} = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('resumes');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('resumes');
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findById(context.user._id).populate('resumes');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    resumes: async () => {
      return Resume.find();
    },
    resume: async (parent, { resumeId }) => {
      return Resume.findById(resumeId);
    },
    educations: async () => {
      return Education.find();
    },
    education: async (parent, { educationId }) => {
      return Education.findById(educationId);
    },
    experiences: async () => {
      return Experience.find();
    },
    experience: async (parent, { experienceId }) => {
      return Experience.findById(experienceId);
    },
    skills: async () => {
      return Skills.find();
    },
    information: async () => {
      return Information.findOne(); // Corrected model name
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      try {
        const user = await User.create({ username, email, password });
        const token = signToken(user);
        return { token, user };
      } catch (error) {
        throw new UserInputError('User registration failed', { errors: error.errors });
      }
    },
    login: async (parent, { email, password }) => {
      try {
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
      } catch (error) {
        throw new AuthenticationError('Login failed');
      }
    },
    createResume: async (parent, { resumeInput }, context) => {
      try {
        if (context.user) {
          const resume = await Resume.create({
            ...resumeInput,
            user: context.user._id,
          });

          return resume;
        }
        throw new AuthenticationError('You need to be logged in!');
      } catch (error) {
        throw new UserInputError('Failed to create resume', { errors: error.errors });
      }
    },
    createEducation: async (parent, { educationInput }, context) => {
      try {
        if (context.user) {
          const education = await Education.create({
            ...educationInput,
            user: context.user._id,
          });

          return education;
        }
        throw new AuthenticationError('You need to be logged in!');
      } catch (error) {
        throw new UserInputError('Failed to create education', { errors: error.errors });
      }
    },
    createExperience: async (parent, { experienceInput }, context) => {
      try {
        if (context.user) {
          const experience = await Experience.create({
            ...experienceInput,
            user: context.user._id,
          });

          return experience;
        }
        throw new AuthenticationError('You need to be logged in!');
      } catch (error) {
        throw new UserInputError('Failed to create experience', { errors: error.errors });
      }
    },
    createSkills: async (parent, { skillsInput }, context) => {
      try {
        if (context.user) {
          const skills = await Skills.create({
            ...skillsInput,
            user: context.user._id,
          });

          return skills;
        }
        throw new AuthenticationError('You need to be logged in!');
      } catch (error) {
        throw new UserInputError('Failed to create skills', { errors: error.errors });
      }
    },
    updateInformation: async (parent, { informationInput }, context) => {
      try {
        if (context.user) {
          const information = await Information.findOneAndUpdate(
            { user: context.user._id },
            { $set: informationInput },
            { new: true, upsert: true }
          );

          return information;
        }
        throw new AuthenticationError('You need to be logged in!');
      } catch (error) {
        throw new UserInputError('Failed to update personal info', { errors: error.errors });
      }
    },
    // ... (Your other mutation resolvers here)
  },
};

module.exports = resolvers;
