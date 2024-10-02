import React, { useState,useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Auth.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { authContext } from '../context/AuthContext.jsx';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const[formData,setFormData] = useState({
    email:"",
    password:"",
  })
  const navigate = useNavigate();
  const {dispatch} = useContext(authContext);

  const handleInputChange = e =>{
    setFormData({ ...formData , [e.target.name] : e.target.value});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login submitted', { email, password });

    try{
      const res = await fetch(`http://localhost:5173/auth/login`,{
        method:"post",
        headers:{"Content-Type":"application/json",},
        body:JSON.stringify(formdata),
      });

      const result = await res.json();

      if(!res.ok)
      {
        throw new Error(result.message);
      }

      dispatch({
        type:'LOGIN_SUCCESS',
        payload:{
          user:result.data,
          token:result.token,
          role:result.role,
        }
      })

      navigate('/home');
    }
    catch(err){
      toast.error(err.message); 
    }
  };

  return (
    <div className="whole">
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2 className="auth-heading">Login</h2>

        <div className="form-group">
          <label>Email</label>
          <input 
            type="email" 
            value={email}
            //onChange={(e) => setEmail(e.target.value)}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn auth-btn">Login</button>
        <p>
          Don't have an account? <Link to="/Signup" className="auth-link">Register</Link>
        </p>
      </form>
    </div>
    </div>
  );
};

export default Login;
