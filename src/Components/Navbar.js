import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return(
    <nav className="navbar fixed-top navbar-light">
      <div className="d-flex justify-content-between">
        <Link to="/" className="navbar-brand">
          Wave
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
