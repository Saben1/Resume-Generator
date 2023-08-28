const { AuthenticationError } = require('apollo-server-express');
const { User, Information, Education, Experience } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('information educations experiences');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('information educations experiences');
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    createResume: async (parent, { informationData, educationData, experienceData }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id);

        const information = await Information.create(informationData);
        user.information = information._id;

        const educations = await Education.create(educationData);
        user.educations.push(...educations);

        const experiences = await Experience.create(experienceData);
        user.experiences.push(...experiences);

        await user.save();

        return {
          user,
          information,
          educations,
          experiences,
        };
      }
      throw new AuthenticationError('You need to be logged in to save a resume.');
    },
  },
};

module.exports = resolvers;
