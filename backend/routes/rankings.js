const express = require('express');
const router = express.Router();

// Mock data
const rankings = [
  { id: 1, title: 'Ranking 1', synopsis: 'Synopsis 1', platform: 'Netflix', link: 'https://netflix.com' },
  { id: 2, title: 'Ranking 2', synopsis: 'Synopsis 2', platform: 'Prime Video', link: 'https://primevideo.com' },
  // Add more rankings
];

router.get('/', (req, res) => {
  res.json(rankings);
});

module.exports = router;