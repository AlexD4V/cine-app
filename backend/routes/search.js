const express = require('express');
const router = express.Router();

// Mock data
const movies = [
  { id: 1, title: 'Film 1', synopsis: 'Synopsis 1', platform: 'Netflix', link: 'https://netflix.com' },
  { id: 2, title: 'Film 2', synopsis: 'Synopsis 2', platform: 'Prime Video', link: 'https://primevideo.com' },
  // Add more movies
];

router.get('/', (req, res) => {
  const query = req.query.query.toLowerCase();
  const results = movies.filter(movie => movie.title.toLowerCase().includes(query));
  res.json(results);
});

module.exports = router;
