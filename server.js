// server.js

const express = require('express');
const mongoose = require('mongoose');
const registrationRoutes = require('./routes/registrationRoutes');
const cors = require('cors')
const app = express();
const PORT = process.env.PORT || 7120;

// Middleware
app.use(express.json());
app.use(cors());
// Routes
app.use('/api', registrationRoutes);

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/ticket-ease', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('MongoDB connection error:', error);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
