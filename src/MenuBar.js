import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './MenuBar.css';
import { FaArrowLeft } from 'react-icons/fa';

const MenuBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Hide the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="menu-container" ref={menuRef}>
      <div className={`menu-bar ${isMenuOpen ? 'open' : 'closed'}`}>
        <div className="menu-header">
          <div className="menu-logo" onClick={toggleMenu}>
            {isMenuOpen ? <FaArrowLeft /> : 'Menu'}
          </div>
        </div>
        {isMenuOpen && (
          <div className="menu-items">
            <ul>
              <li><Link to="/profile">Profile</Link></li>
              <li><Link to="/settings">Settings</Link></li>
              <li><Link to="/contact-us">Contact Us</Link></li>
              <li><Link to="/ask-doubts">Ask Doubts</Link></li>
              <li><Link to="/logout">Logout</Link></li>
              <li>
                <div className="close-menu" onClick={() => setIsMenuOpen(false)}>
                  <FaArrowLeft /> Close Menu
                </div>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuBar;
