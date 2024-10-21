// src/pages/Signup.js
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SignupForm from '../components/SignupForm';

const Signup = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Inscription</h1>
        <SignupForm />
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
