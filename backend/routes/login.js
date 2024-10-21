const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { email, password } = req.body;
  // Handle login logic here
  res.json({ message: 'Login successful' });
});

module.exports = router;