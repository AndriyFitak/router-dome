import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/loginform.css';

const LoginForm = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ username: '', password: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = () => {
    navigate('/cart');
  };

  return (
    <div className="login-form-container">
      <h2>Login</h2>
      <form>
        <label>
          Username:
          <input type="text" name="username" value={loginData.username} onChange={handleInputChange} />
        </label>
        <label>
          Password:
          <input type="password" name="password" value={loginData.password} onChange={handleInputChange} />
        </label>
        <button type="button" onClick={handleSubmit}>Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
