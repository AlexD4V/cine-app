const express = require('express');
const router = express.Router();

// Mock data
const recommendations = [
  { id: 1, title: 'Recommendation 1', synopsis: 'Synopsis 1', platform: 'Netflix', link: 'https://netflix.com' },
  { id: 2, title: 'Recommendation 2', synopsis: 'Synopsis 2', platform: 'Prime Video', link: 'https://primevideo.com' },
  // Add more recommendations
];

router.get('/', (req, res) => {
  res.json(recommendations);
});

module.exports = router;