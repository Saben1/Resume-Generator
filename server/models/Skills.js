const { Schema, model } = require('mongoose');

const skillsSchema = new Schema({
  skillName: {
    type: String,
    required: true,
    trim: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

const Skills = model('Skills', skillsSchema);

module.exports = Skills;
