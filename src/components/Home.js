import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Home.css';
import Navbar from './Navbar.js';

import event1 from './event1.jpeg';
import event2 from './event2.jpeg';
import event3 from './event3.jpeg';

const Home = () => {
  return (
    <div className="home-container">
      <Navbar /><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <h1 className="home-title">
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
      <div className="posts-section">
        <h2 className="posts-title">Recent Posts</h2>
        <div className="posts-container">
          <div className="post">
            <img src={event1} alt="Event 1" className="post-image" />
          </div>
          <div className="post">
            <img src={event2} alt="Event 2" className="post-image" />
          </div>
          <div className="post">
            <img src={event3} alt="Event 3" className="post-image" />
          </div>
        </div>
      </div>
      <div className="news-section">
        <h2 className="news-title">Latest News</h2>
        <div className="news-container">
          {newsItems.map((item, index) => (
            <div className="news-item" key={index}>
              <h3>{item.title}</h3>
              <p className="news-date">{item.date}</p>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
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
          <p>Email: <a href="mailto:maheshbeeragownivari@gmail.com">maheshbeeragownivari@gmail.com</a></p>
          <p>Phone: +91 6281588540</p>
        </div>
      </div>
    </div>
  );
};

const newsItems = [
  { title: "Orientation Programme", date: "31st July 2024", description: "Orientation Programme for First Year B.Tech Students was organized at MITS." },
  { title: "Virtual Workshop", date: "Upcoming Date", description: "MITS will organize a virtual workshop on 'National Education Policy 2020 - Engineering Education - Curriculum' in collaboration with IIC." },
  // Add other news items here
];

export default Home;
