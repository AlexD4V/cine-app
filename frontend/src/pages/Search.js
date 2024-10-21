// src/pages/Search.js
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import Card from '../components/Card';
import axios from 'axios';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = (query) => {
    setQuery(query);
    axios.get(`/api/search?query=${query}`)
      .then(response => {
        setResults(response.data);
      })
      .catch(error => {
        console.error('There was an error searching!', error);
      });
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Rechercher des Films et Séries</h1>
        <SearchBar onSearch={handleSearch} />
        <div className="card-grid">
          {results.map(result => (
            <Card key={result.id} movie={result} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Search;
