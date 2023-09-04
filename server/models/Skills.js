// models/skills.js
const { Schema, model } = require('mongoose');

const skillsSchema = new Schema(
  {
    name: String,
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

const Skills = model('Skills', skillsSchema);

module.exports = Skills;
