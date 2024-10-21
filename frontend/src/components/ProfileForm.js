// src/components/ProfileForm.js
import React, { useState } from 'react';
import axios from 'axios';

const ProfileForm = ({ user }) => {
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put('/api/profile', { email, password })
      .then(response => {
        // Handle successful profile update
      })
      .catch(error => {
        console.error('There was an error updating the profile!', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Mot de passe</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Mettre à jour le profil</button>
    </form>
  );
};

export default ProfileForm;
