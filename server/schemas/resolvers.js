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
    education: async () => {
      return Education.findOne();
    },
    // education: async (parent, { educationId }) => {
    //   return Education.findById(educationId);
    // },
    experience: async () => {
      return Experience.findOne();
    },
  //  experience: async (parent, { experienceId }) => {
  //     return Experience.findById(experienceId);
  //   }, 
    skills: async () => {
      return Skills.findOne();
    },
    // skills: async (parent, { skillsId }) => {
    //   return Skills.findById(skillsId);
    // },
    information: async () => {
      return Information.findOne(); // Corrected model name
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      // try {
      console.log("resolver ma user register gane");
      const user = await User.create({ username, email, password });
      console.log("user create bhayo");
      const token = signToken(user);
      console.log(token);
      return { token, user };
      // } catch (error) {
      //   throw new UserInputError('User registration failed', { errors: error.errors });
      // }
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
    createInformation: async (parent, {firstName, lastName, email, phone, address }, context) => {
        // console.log(context.body.variables.firstName);
          const information = await Information.create({
            firstName: context.body.variables.firstName, lastName: context.body.variables.lastName, email: context.body.variables.email, phone: context.body.variables.phone, address: context.body.variables.address,
            user: context.user._id,
          });
          console.log("information");
          return information;
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
    createEducation: async (parent, {institution, degree, startDate, endDate }, context) => {
      const education = await Education.create({
          institution: context.body.variables.institution, degree: context.body.variables.degree, startDate: context.body.variables.startDate, endDate: context.body.variables.endDate,
          user: context.user._id,
        });
        console.log("education");
        return education;
  },
    createExperience: async (parent, {company, position, startDate, endDate }, context) => {
      const experience = await Experience.create({
        company: context.body.variables.company, position: context.body.variables.position, startDate: context.body.variables.startDate, endDate: context.body.variables.endDate,
          user: context.user._id,
      });
      console.log("experience");
      return experience;
    },
    createSkills: async (parent, {skill}, context) => {
      const skills = await Skills.create({
        skill: context.body.variables.skill, 
          user: context.user._id,
      });
      console.log("skills");
      return skills;
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
  },
};

module.exports = resolvers;
