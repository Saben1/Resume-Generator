// models/resume.js
const { Schema, model } = require('mongoose');

const resumeSchema = new Schema(
  {
    information: {
      type: Schema.Types.ObjectId,
      ref: 'Information',
    },
    education: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Education',
      },
    ],
    experience: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Experience',
      },
    ],
    skills: [String],
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const Resume = model('Resume', resumeSchema);

module.exports = Resume;
