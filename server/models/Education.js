// models/education.js
const { Schema, model } = require('mongoose');

const educationSchema = new Schema(
  {
    institution: String,
    degree: String,
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

const Education = model('Education', educationSchema);

module.exports = Education;
