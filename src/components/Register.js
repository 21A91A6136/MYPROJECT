// client/src/components/RegistrationForm.js
import React, { useState } from 'react';
import Header from './Header';
import Footer from './footer';
import './forms.css';
import '../App.css';

const Registration = () => {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    phone: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send registration data to the backend
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message); // Show registration success message
        setFormData({ email: '', username: '', password: '', phone: '' }); // Clear the form
      } else {
        alert(data.message); // Show registration error message
      }
    } catch (error) {
      console.error('Error registering:', error);
    }
  };

  return (
    <div>
      <div className="form-container">
      <Header />
      <div className="form-wrapper registration-form">
        <h2 className="form-title">Registration Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} className="form-control" required />
          </div>
          <div className="mb-3">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" value={formData.username} onChange={handleInputChange} className="form-control" required />
          </div>
          <div className="mb-3">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" value={formData.password} onChange={handleInputChange} className="form-control" required />
          </div>
          <div className="mb-3">
            <label htmlFor="phone">Phone Number:</label>
            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} className="form-control" required />
          </div>
          <button type="submit" className="btn btn-primary">Register</button>
        </form>
      </div>
    </div>
    <Footer/>
    </div>
      );
};

export default Registration;
