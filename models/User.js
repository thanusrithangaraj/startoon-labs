// server/routes/user.js

const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Import the User model
const auth = require('../middleware/auth'); // Import authentication middleware

// Route to get user profile
router.get('/profile', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id); // Assuming req.user contains authenticated user info
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

module.exports = router;
