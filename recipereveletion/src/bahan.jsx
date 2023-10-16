import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">Logo</div>
      <nav>
        <ul className="nav-list">
          <li><a href="#">resep baru baru ini</a></li>
          <li><a href="#">resep saya</a></li>
          <li><a href="#">istilah masak</a></li>
          <li><Link to="/login">Masuk</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
