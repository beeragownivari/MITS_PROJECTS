import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Login.css';
import { toast, Toaster } from 'react-hot-toast';
import ClipLoader from 'react-spinners/ClipLoader';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmailID] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleLogin = async (event) => {
    setIsLoading(true);
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/college/mits/verifyLogin', { email, password }, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setMessage(response.data.message);
      if (response.data.status === "200") {
        toast.success(response.data.message);
        setIsLoading(false);
        const timer = setTimeout(() => {
          navigate(`/`);
        }, 1000); // 1 seconds delay
        return () => clearTimeout(timer);
      } else if (response.data.status === "100") {
        toast.error(response.data.message);
        setIsLoading(false);

      }
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message);
      } else {
        setMessage('An error occurred');
      }
    }

  };

  const handleClick = () => {
    navigate("/resetPassword");
  };

  return (
    <div className="login-background">
      <div className="login-container">
        <form className="login-form" onSubmit={handleLogin}>
          <h2 className="login-title">Login</h2>
          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmailID(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">
            {isLoading ? <ClipLoader color={"#ffffff"} size={20} /> : 'Login'}
          </button>
        </form>
        <div className="additional-content">
          <p className="forgot-password" onClick={handleClick}>
            <a href="#" onClick={(e) => { e.preventDefault(); handleClick(); }}>
              Forgot Password?
            </a>
          </p>
          <p className="signup-link">
            Don't have an account? <a href="/signup">Sign Up</a>
          </p>
        </div>
      </div>
      <Toaster position="top-right" />
    </div>
  );
};

export default Login;
