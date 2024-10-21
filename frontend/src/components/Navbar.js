// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/search">Rechercher</Link></li>
        <li><Link to="/recommendations">Recommandations</Link></li>
        <li><Link to="/rankings">Classement</Link></li>
        <li><Link to="/profile">Profil</Link></li>
        <li><Link to="/login">Connexion</Link></li>
        <li><Link to="/signup">Inscription</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
