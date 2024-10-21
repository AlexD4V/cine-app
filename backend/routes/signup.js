const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { email, password } = req.body;
  // Handle signup logic here
  res.json({ message: 'Signup successful' });
});

module.exports = router;