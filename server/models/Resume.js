const { Schema, model } = require('mongoose');

const resumeSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  objective: {
    type: String,
    trim: true,
  },
  education: [
    {
      institution: {
        type: String,
        required: true,
        trim: true,
      },
      degree: {
        type: String,
        required: true,
        trim: true,
      },
      startDate: {
        type: String,
        required: true,
      },
      endDate: {
        type: String,
      },
    },
  ],
  experience: [
    {
      company: {
        type: String,
        required: true,
        trim: true,
      },
      position: {
        type: String,
        required: true,
        trim: true,
      },
      startDate: {
        type: String,
        required: true,
      },
      endDate: {
        type: String,
      },
      description: {
        type: String,
        trim: true,
      },
    },
  ],
  skills: [
    {
      type: String,
      trim: true,
    },
  ],
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

const Resume = model('Resume', resumeSchema);

module.exports = Resume;
