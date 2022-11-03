import React from 'react';
import './style.css';

function Header() {
  return (
    <div className="header">
        <img className= "logo" src="./img/logo.png" />
        <a href="#">link1</a>
        <a href="#">link2</a>
        <a href="#">link3</a>
        <a href="#">link4</a>
    </div>
  );
}

export default Header;