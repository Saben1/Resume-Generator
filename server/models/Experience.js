// models/experience.js
const { Schema, model } = require('mongoose');

const experienceSchema = new Schema(
  {
    company: String,
    position: String,
    startDate: String,
    endDate: String,
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

const Experience = model('Experience', experienceSchema);

module.exports = Experience;
