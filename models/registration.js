// models/registration.js

const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  sex: {
    type: String,
    required: true
  },
  mobileNumber: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  numberOfPersons: {
    type: Number,
    required: true
  },
  date: {
    type: String,
    required: true
  }
});

const Registration = mongoose.model('Registration', registrationSchema);

module.exports = Registration;
