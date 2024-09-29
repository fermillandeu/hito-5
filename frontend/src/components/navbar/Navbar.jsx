import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-button">Home</Link>
      <Link to="/login" className="navbar-button">Login</Link>
      <Link to="/register" className="navbar-button">Register</Link>
      <Link to="/cart" className="navbar-button">Cart</Link> 
    </nav>
  );
};

export default Navbar;
