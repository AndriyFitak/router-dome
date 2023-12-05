import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../styles/loginform.css';

const LoginForm = ({ users }) => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ username: '', password: '', confirmPassword: '' });
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = () => {
    const foundUser = users.find(
      (user) => user.username === loginData.username && user.password === loginData.password
    );

    if (foundUser) {
      navigate('/cart');
    } else {
      setErrorMessage('Неправильний логін або пароль.');
    }
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
        <button type="button" onClick={handleSubmit}>
          Login
        </button>
        {errorMessage && (
          <p className="error-message">
            {errorMessage}
            <Link to="/register">Зареєструватися</Link>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginForm;