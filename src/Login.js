import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import emailjs from 'emailjs-com';
import { toast, Toaster } from 'react-hot-toast';

const Login = () => {
  const [data, setData] = useState({
    email: '',
    password: ''
  });
  const form = useRef();
  const navigate = useNavigate();

  const { email, password } = data;

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    toast('Submitting your request...');
    emailjs
      .sendForm('service_gtse6eg', 'template_2jceevt', form.current, 'GAO4PHb19XRjYOeZx')
      .then(
        () => {
          toast.success('Email sent successfully!', {
            position: 'top-right',
          });
          navigate('/'); // Navigate to Home page after successful email
        },
        (error) => {
          toast.error(`Email not sent: ${error.text}`, {
            position: 'top-right',
          });
        }
      );
    e.target.reset();
  };

  return (
    <div className="login-background">
      <div className="login-container">
        <form className="login-form" onSubmit={submitHandler} ref={form}>
          <h2 className="login-title">Login</h2>
          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={changeHandler}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={changeHandler}
              required
            />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        <div className="additional-content">
          <p className="forgot-password">
            <a href="/reset-password">Forgot Password?</a>
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
