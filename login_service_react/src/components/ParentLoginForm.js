import React, { useState } from 'react';
import { loginParent } from '../api/api';
import "./ParentLoginForm.css";

const ParentLoginForm = ({ onLoginSuccess, onLoginError }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await loginParent(formData);
      if (response.status === 200) {
        onLoginSuccess({ email: formData.email });
      } else {
        if (onLoginError) onLoginError();
      }
    } catch (err) {
      if (onLoginError) onLoginError();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="parent-login-form">
      <h2>Parent Login</h2>
      {error && <div className="alert">{error}</div>}

      <div className="form-group">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          autoFocus
          className="input-field"
        />
      </div>

      <div className="form-group">
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          minLength={6}
          className="input-field"
        />
      </div>

      <button type="submit" className="submit-btn">Login</button>
    </form>
  );
};

export default ParentLoginForm;