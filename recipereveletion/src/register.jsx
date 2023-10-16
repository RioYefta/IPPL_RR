import { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import React from 'react';
import './App.css'

function Register() {
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
        <div className="register-box">
          <h1>Masuk</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="Nama lengkap">Nama Lengkap:</label>
              <input
                type="text"
                id="nama lengkap"
                value={username}
                onChange={handleUsernameChange}
              />
            </div>
            <div>
              <label htmlFor="Email">Email:</label>
              <input
                type="text"
                id="Email"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
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
                <p>
                Sudah Memiliki Akun? <a href="#"> <Link to="/login">Masuk</Link></a>
                </p>
              <button 
                type="submit" 
                onClick={handleLogin}>Daftar</button>
            </div>
          </form>
          
        </div>
      </div>
    );
  }

export default Register;
