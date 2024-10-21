// src/pages/Home.js
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('/api/movies')
      .then(response => {
        setMovies(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the movies!', error);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Films et Séries de la Semaine</h1>
        <div className="card-grid">
          {movies.map(movie => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
