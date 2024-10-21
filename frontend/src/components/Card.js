// src/components/Card.js
import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ movie }) => {
  return (
    <div className="card">
      <img src={movie.poster} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>{movie.synopsis}</p>
      <Link to={`/details/${movie.id}`}>Voir les détails</Link>
    </div>
  );
};

export default Card;