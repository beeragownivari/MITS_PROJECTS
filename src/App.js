import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import InterviewQuestions from './InterviewQuestions';
import Communicate from './components/Communicate';
import Events from './components/Events';
import Resources from './components/Resources';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/interview-questions" element={<InterviewQuestions />} />
        <Route path="/communicate" element={<Communicate />} />
        <Route path="/events" element={<Events />} />
        <Route path="/resources" element={<Resources />} />
        
      </Routes>
    </Router>
  );
};

export default App;
