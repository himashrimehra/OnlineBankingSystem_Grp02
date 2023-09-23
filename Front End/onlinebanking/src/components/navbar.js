import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar" >
      <Link to="/" className="navbar-brand" >
        Online Banking System
      </Link>
      {/* <ul className="navbar-links">
        <li>
          <Link to="/login" className="navbar-link">
            Login
          </Link>
        </li>
        <li>
          <Link to="/openAccount" className="navbar-link">
            Open a new account
          </Link>
        </li>
      </ul> */}
    </nav>
  );
};

export default Navbar;
