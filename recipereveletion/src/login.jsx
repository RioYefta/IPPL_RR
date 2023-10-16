
import { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import React from 'react';
import './App.css'

function Login() {


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleUsernameChange = (event) => {
      setUsername(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
    };

    const handleLogin = () => {
        
        history.push('/'); 
    };

    
  
    return (
      <div className="container">
        <div className="login-box">
          <h1>Masuk</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={handleUsernameChange}
              />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <div>
                <p style={{ textAlign: 'right' }}>
                lupa password
                </p>
              <button 
                type="submit" 
                onClick={handleLogin}>Masuk</button>
                <p>
                Belum memiliki akun? <a href="#"> <Link to="/register">Daftar Disini</Link></a>
                </p>
            </div>
          </form>
          
        </div>
      </div>
    );
  }
  
  export default Login;
  