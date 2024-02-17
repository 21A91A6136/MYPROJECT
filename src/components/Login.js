// client/src/components/LoginForm.js
import React, { useState } from 'react';
import Header from './Header';
import Footer from './footer';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './forms.css';

const Login = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send login data to the backend
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message); // Show login success message
        setFormData({ username: '', password: '' }); // Clear the form
        navigate('/Second'); // Redirect to the desired page after successful login
      } else {
        alert(data.message); // Show login error message
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div>
      <div className="form-container">
      <Header />
      <div className="form-wrapper login-form ">
        <h2 className="form-title mt-5 mb-3 ">Login Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 ">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" value={formData.username} onChange={handleInputChange} className="form-control" required />
          </div>
          <div className="mb-3">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" value={formData.password} onChange={handleInputChange} className="form-control" required />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </div>
     
    </div>
      );
};

export default Login;
