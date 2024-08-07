import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/SignUp.css';
import { toast, Toaster } from 'react-hot-toast';
import axios from 'axios';
import ClipLoader from 'react-spinners/ClipLoader';

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    mobilenumber: '',
    name:''
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
 
  
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSubmit = async (event) => {
    setIsLoading(true);
    event.preventDefault();
    const data = new FormData();
    data.append('mobilenumber', formData.mobilenumber);
    data.append('email', formData.email);
    data.append('name', formData.name);
    data.append('password', formData.password);
      console.log('Form submitted', formData);
     
      try {
        const response = await axios.post('http://localhost:8080/college/mits/register', data, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        if (response.data.status == "200") {
          toast.success(response.data.message);
          setIsLoading(false);
          const timer = setTimeout(() => {
            navigate('/Login');
          }, 1000); // 1 seconds delay
          return () => clearTimeout(timer);
        } else {
          toast.error(response.data.message);
          setIsLoading(false);
        }
      } catch (error) {
        toast.error(error);
        setIsLoading(false);
        console.error('Error submitting form', error);
      }
    
  };


  return (
    <div className="signup-background">
      <div className="signup-container">
        <form className="signup-form" onSubmit={handleSubmit} ref={formData}>
          <h2 className="signup-title">Sign Up</h2>
          <div className="input-group">
            <input
              type="name"
              name="name"
              placeholder="Name"
             value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="mobilenumber"
              name="mobilenumber"
              placeholder="Mobile Number"
             value={formData.mobilenumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
             value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="signup-button">
          {isLoading ? <ClipLoader color={"#ffffff"} size={20} /> : 'Sign Up'}
            </button>
        </form>
        <div className="additional-content">
          <p className="login-link">
            Already have an account? <a href="/login">Login</a>
          </p>
        </div>
      </div>
      <Toaster position="top-center" />
    </div>
  );
};

export default SignUp;
