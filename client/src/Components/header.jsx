import "../styles/header.css"
import 'reset-css';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <header className="header">
        <ul className="ul-block">
          <li><Link to="/">Home</Link></li>
          <li className="two-text"><Link to="/products">Products</Link></li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
