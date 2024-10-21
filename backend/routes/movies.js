const express = require('express');
const router = express.Router();

// Mock data
const movies = [
  { id: 1, title: 'Film 1', synopsis: 'Synopsis 1', platform: 'Netflix', link: 'https://netflix.com' },
  { id: 2, title: 'Film 2', synopsis: 'Synopsis 2', platform: 'Prime Video', link: 'https://primevideo.com' },
  // Add more movies
];

router.get('/', (req, res) => {
  res.json(movies);
});

router.get('/:id', (req, res) => {
  const movie = movies.find(m => m.id === parseInt(req.params.id));
  if (!movie) return res.status(404).send('Movie not found.');
  res.json(movie);
});

module.exports = router;