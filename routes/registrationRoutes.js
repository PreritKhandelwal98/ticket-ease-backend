// routes/registrationRoutes.js

const express = require('express');
const router = express.Router();
const Registration = require('../models/registration');

// Route to handle registration form submission
router.post('/register', async (req, res) => {
  try {
    const registration = new Registration(req.body);
    await registration.save();
    res.status(201).json({ message: 'Registration successful' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
