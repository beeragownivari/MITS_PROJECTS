import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';
import emailjs from 'emailjs-com';
import { toast, Toaster } from 'react-hot-toast';

const SignUp = () => {
  const [data, setData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });
  const form = useRef();
  const navigate = useNavigate();

  const { email, password, confirmPassword } = data;

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error('Passwords do not match!', {
        position: 'top-right',
      });
      return;
    }

    toast('Submitting your request...');
    emailjs
      .sendForm('service_gtse6eg', 'template_2jceevt', form.current, 'GAO4PHb19XRjYOeZx')
      .then(
        () => {
          toast.success('Sign up successful!', {
            position: 'top-right',
          });
          navigate('/'); // Navigate to Home page after successful sign-up
        },
        (error) => {
          toast.error(`Sign up failed: ${error.text}`, {
            position: 'top-right',
          });
        }
      );
    e.target.reset();
  };

  return (
    <div className="signup-background">
      <div className="signup-container">
        <form className="signup-form" onSubmit={submitHandler} ref={form}>
          <h2 className="signup-title">Sign Up</h2>
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
          <div className="input-group">
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={changeHandler}
              required
            />
          </div>
          <button type="submit" className="signup-button">Sign Up</button>
        </form>
        <div className="additional-content">
          <p className="login-link">
            Already have an account? <a href="/login">Login</a>
          </p>
        </div>
      </div>
      <Toaster position="top-right" />
    </div>
  );
};

export default SignUp;
