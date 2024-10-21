// src/pages/Recommendations.js
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';
import axios from 'axios';

const Recommendations = () => {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    axios.get('/api/recommendations')
      .then(response => {
        setRecommendations(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the recommendations!', error);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Recommandations</h1>
        <div className="card-grid">
          {recommendations.map(recommendation => (
            <Card key={recommendation.id} movie={recommendation} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Recommendations;
