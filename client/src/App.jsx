// app.jsx

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/header';
import Main from './Components/main';
import LoginForm from './Components/loginform';
import Cart from './Components/cart'; 
import Register from './Components/register';
import Products from './Components/products';



const App = () => {
   const [users, setUsers] = useState([
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' },
  ]);


  const handleRegister = (newUser) => {
    setUsers([...users, newUser]);
  };
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/products" element={<Products users={users} />} />
          <Route
            path="/login"
            element={<LoginForm users={users} />}
          /> 
          <Route path="/cart" element={<Cart />} />
          <Route path="/register" element={<Register onRegister={handleRegister} users={users} />} />
          
        </Routes>
      </div>
    </Router>
  );
};

export default App;
