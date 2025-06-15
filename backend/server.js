require('dotenv').config(); // Load environment variables
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;
const JWT_SECRET = process.env.JWT_SECRET; // Load secret key from .env

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/wbcss', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// User Schema
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  farmLocation: String, // Add farmLocation field
});
const User = mongoose.model('User', userSchema);

// Signup Route
app.post('/signup', async (req, res) => {
  const { name, email, password, farmLocation } = req.body; // Include farmLocation

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword, farmLocation }); // Save farmLocation
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    if (error.code === 11000) {
      res.status(400).json({ message: 'Email already exists' });
    } else {
      res.status(500).json({ message: 'Error registering user' });
    }
  }
});

// Login Route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const token = jwt.sign({ id: user._id, name: user.name, farmLocation: user.farmLocation }, JWT_SECRET, { expiresIn: '1h' }); // Include name and farmLocation in the token
    res.status(200).json({ message: 'Login successful', token, user }); // Send user object with all fields
  } catch (error) {
    res.status(500).json({ message: 'Error logging in' });
  }
});

// Verify Token Route
app.post('/verify-token', (req, res) => {
  const token = req.headers.authorization?.split(' ')[1]; // Extract token from Authorization header
  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify token
    res.status(200).json({ user: decoded }); // Send back the decoded user
  } catch (error) {
    res.status(401).json({ message: 'Invalid or expired token' });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});