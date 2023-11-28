// main.jsx
import React from 'react';
import Home from "../images/homeimg.jpg";
import "../styles/main.css"
const Main = () => {
  return (
    <div>
      <img className='img-home' src={Home} alt="" />
      <h1 className='sitegit-text-home'>Site <span className='git-text'>Git</span></h1>
      <p>This is the home page content.</p>
    </div>
  );
};

export default Main;
