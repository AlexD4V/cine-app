// src/pages/Details.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from 'axios';

const Details = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios.get(`/api/movies/${id}`)
      .then(response => {
        setMovie(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the movie details!', error);
      });
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>{movie.title}</h1>
        <p>{movie.synopsis}</p>
        <p>Plateforme: {movie.platform}</p>
        <a href={movie.link} target="_blank" rel="noopener noreferrer">Regarder sur {movie.platform}</a>
      </div>
      <Footer />
    </div>
  );
};

export default Details;
