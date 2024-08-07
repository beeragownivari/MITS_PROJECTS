import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/home"><b>About us</b></Link>
        </li>
        <li className="navbar-item">
          <Link to="/login"><b>Login</b></Link>
        </li>
        <li className="navbar-item">
          <Link to="/signup"><b>Sign Up</b></Link>
        </li>
        <li className="navbar-item">
          <Link to="/contactus"><b>Contact us</b></Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
