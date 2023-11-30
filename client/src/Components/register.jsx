// register.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = ({ onRegister }) => {
  const navigate = useNavigate();
  const [registerData, setRegisterData] = useState({ username: '', password: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
  };

  const handleRegister = () => {
    onRegister(registerData); 
    navigate('/cart');
  };

  return (
    <div className="login-form-container">
      <h2>Register</h2>
      <form>
        <label>
          Username:
          <input type="text" name="username" value={registerData.username} onChange={handleInputChange} />
        </label>
        <label>
          Password:
          <input type="password" name="password" value={registerData.password} onChange={handleInputChange} />
        </label>
        <button type="button" onClick={handleRegister}>Register</button>
      </form>
    </div>
  );
};

export default Register;