// models/education.js
const { Schema, model } = require('mongoose');

const educationSchema = new Schema(
  {
    institution:  {
      type: String,
      required: true,
      trim: true,
    },
    degree:  {
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

const Education = model('Education', educationSchema);

module.exports = Education;
