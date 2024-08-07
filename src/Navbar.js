import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="navbar">
        <button className="menu-logo" onClick={toggleMenu}>
          ☰
        </button>
        <ul className={`navbar-list ${isMenuOpen ? 'open' : ''}`}>
          <li className="navbar-item"><a href="/Home"><b>Home</b></a></li>
          <li className="navbar-item"><a href="/login"><b>Login</b></a></li>
          <li className="navbar-item"><a href="/signup"><b>Sign Up</b></a></li>
        </ul>
      </div>
      <div className={`side-menu ${isMenuOpen ? 'open' : ''}`}>
        <ul className="side-menu-list">
          <li className="side-menu-item"><a href="/profile">Profile</a></li>
          <li className="side-menu-item"><a href="/settings">Settings</a></li>
          <li className="side-menu-item"><a href="/logout">Logout</a></li>
          <li className="side-menu-item"><a href="/contact-us">Contact Us</a></li>
          <li className="side-menu-item"><a href="/ask-doubts">Ask Doubts</a></li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
