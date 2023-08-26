const { Schema, model } = require('mongoose');

const experienceSchema = new Schema({
  company: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
});

const Experience = model('Experience', experienceSchema);

module.exports = Experience;
