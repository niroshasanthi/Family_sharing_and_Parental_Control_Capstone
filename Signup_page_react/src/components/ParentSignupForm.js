import React, { useState } from 'react';
import { signupParent } from '../api/api';
import './styles.css';

const ParentSignupForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');
    try {
      const response = await signupParent(formData);
      setMessage(`Signup successful! Welcome, ${response.data.name}`);
      setFormData({ name: '', email: '', password: '' });
      window.location.href = 'http://localhost:3001';
    } catch (err) {
      if (err.response && err.response.status === 409) {
        setError('Parent with this email already exists.');
      } else {
        setError('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div className="signup-bg">
      <div className="signup-card">
        <h2>Parent Signup</h2>
        {message && <div className="signup-message success">{message}</div>}
        {error && <div className="signup-message error">{error}</div>}
        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="form-group">
            
            <input
              id="parent-name"
              type="text"
              name="name"
              placeholder='Name'
              className="signup-input"
              value={formData.name}
              onChange={handleChange}
              required
              autoComplete="off"
            />
          </div>
          <div className="form-group">
            <input
              id="parent-email"
              type="email"
              name="email"
              placeholder='Email'
              className="signup-input"
              value={formData.email}
              onChange={handleChange}
              required
              autoComplete="off"
            />
          </div>
          <div className="form-group">
            <input
              id="parent-password"
              type="password"
              name="password"
              placeholder='Password'
              className="signup-input"
              value={formData.password}
              onChange={handleChange}
              required
              minLength={6}
              autoComplete="off"
            />
          </div>
          <button type="submit" className="signup-btn">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default ParentSignupForm;