// products.jsx

import React from 'react';
import '../styles/products.css';

const Products = ({ users }) => {
  return (
    <div className="products-container">
      <h1>Products</h1>
      <h2>List of Users:</h2>
      <ul className="user-list">
        {users.map((user, index) => (
          <li key={index} className="user-item">
            <div className="user-info">
              <strong>Username:</strong> {user.username}, <strong>Password:</strong> {user.password}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
