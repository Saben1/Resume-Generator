const { Schema, model } = require('mongoose');

const educationSchema = new Schema({
  school: {
    type: String,
    required: true,
  },
  degree: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
});

const Education = model('Education', educationSchema);

module.exports = Education;
