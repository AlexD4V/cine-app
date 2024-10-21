const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/movies', require('./routes/movies'));
app.use('/api/search', require('./routes/search'));
app.use('/api/recommendations', require('./routes/recommendations'));
app.use('/api/rankings', require('./routes/rankings'));
app.use('/api/login', require('./routes/login'));
app.use('/api/signup', require('./routes/signup'));
app.use('/api/profile', require('./routes/profile'));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});