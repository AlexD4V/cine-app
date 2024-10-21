// src/pages/Profile.js
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProfileForm from '../components/ProfileForm';
import axios from 'axios';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/profile')
      .then(response => {
        setUser(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the user profile!', error);
      });
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Profil</h1>
        <ProfileForm user={user} />
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
