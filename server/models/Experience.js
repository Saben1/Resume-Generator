// models/experience.js
const { Schema, model } = require('mongoose');

const experienceSchema = new Schema(
  {
    company:  {
      type: String,
      required: true,
     
      trim: true,
    },
    position:  {
      type: String,
      required: true,
     
      trim: true,
    },
    startDate:  {
      type: String,
      required: true,
     
      trim: true,
    },
    endDate:  {
      type: String,
      required: true,
     
      trim: true,
    },
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
