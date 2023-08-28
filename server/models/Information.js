const { Schema, model } = require('mongoose');

const informationionSchema = new Schema({
    fullName: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      dateOfBirth: {
        type: Date,
        required: true,
      },
      aboutMe: {
        type: String,
      },
      contactNumber: {
        type: String,
  },
});

const Information = model('Information', informationionSchema);

module.exports = Information;
