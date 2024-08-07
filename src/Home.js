import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Home.css'; // Ensure this file exists
import Navbar from './Navbar.js'; // Ensure this file exists

const Home = () => {
  return (
    <div className="home-container">
        <Navbar/>
      <h1 className="home-title"><br/>
        Collaborative Learning and Resource Sharing Platform
      </h1>
      <div className="links-container">
        <Link to="/interview-questions" className="link-item">
          <h2>Interview Questions</h2>
          <p>Prepare for your interviews with a comprehensive list of questions and tips.</p>
        </Link>
        <Link to="/communicate" className="link-item">
          <h2>Communicate</h2>
          <p>Stay connected with your team and peers through various communication channels.</p>
        </Link>
        <Link to="/events" className="link-item">
          <h2>Events</h2>
          <p>Keep track of upcoming events and important dates in your institute or organization.</p>
        </Link>
        <Link to="/resources" className="link-item">
          <h2>Resources</h2>
          <p>Access valuable resources and documents for your personal or professional growth.</p>
        </Link>
      </div>
      <div className="extra-content">
        <div className="social-icons">
          <a href="https://www.instagram.com/mahesh_________gowda/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="social-icon" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/in/mahesh-beeragownivari-329005293/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
          </a>
        </div>
        <div className="contact-info">
          <h3>Contact Us</h3>
          <p>Email: <a href="https://mail.google.com/mail/u/0/#sent?compose=DmwnWtMlRXMDtStrGdCBBTHxRtWspvrsGWDKMPVLRvtpWrbfqJhnZfRdzqPWDdQwPqQfWsqzcxrl">maheshbeeragownivari@gmail.com</a></p>
          <p>Phone: +91 6281588540</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
