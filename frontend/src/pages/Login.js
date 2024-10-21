// src/pages/Login.js
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LoginForm from '../components/LoginForm';

const Login = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Connexion</h1>
        <LoginForm />
      </div>
      <Footer />
    </div>
  );
};

export default Login;
