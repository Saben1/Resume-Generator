// models/information.js
const { Schema, model } = require('mongoose');

const informationSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    address: String,
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

const Information = model('Information', informationSchema);

module.exports = Information;
