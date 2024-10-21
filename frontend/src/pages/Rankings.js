// src/pages/Rankings.js
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';
import axios from 'axios';

const Rankings = () => {
  const [rankings, setRankings] = useState([]);

  useEffect(() => {
    axios.get('/api/rankings')
      .then(response => {
        setRankings(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the rankings!', error);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Classement des Films de la Semaine</h1>
        <div className="card-grid">
          {rankings.map(ranking => (
            <Card key={ranking.id} movie={ranking} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Rankings;
