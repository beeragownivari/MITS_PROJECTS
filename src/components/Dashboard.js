// src/pages/Dashboard.js

import React from 'react';
import Navbar from '../components/Navbar';
import '../css/Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Navbar />
      <div className="content">
        <h1>Welcome to the Dashboard</h1>
        <p>This is the main content area of the dashboard.</p>
      </div>
    </div>
  );
};

export default Dashboard;
