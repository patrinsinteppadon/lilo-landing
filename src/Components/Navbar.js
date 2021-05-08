import React from 'react';
import waveLogo from '../img/logo.png';
import { Link } from 'react-router-dom';

function Navbar() {
  return(
    <nav className="navbar fixed-top navbar-light">
      <div className="d-flex justify-content-between">
        <Link to="/" className="navbar-brand">
          <img style={{ width: '150px' }}src={waveLogo} alt="wave logo" />
        </Link>
      </div>
      <div id="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About us</Link>
      </div>
    </nav>
  )
}

export default Navbar;
