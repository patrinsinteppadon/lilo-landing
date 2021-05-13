import React from 'react';
import waveLogo from '../img/logo.png';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  return(
    <nav className="navbar fixed-top navbar-light">
      <div className="d-flex justify-content-between">
        <Link to="/" className="navbar-brand">
          <img style={{ width: '150px' }}src={waveLogo} alt="wave logo" />
        </Link>
      </div>
      <div id="nav-links">
        <Link 
          style={ 
            location.pathname !== "/about" 
              ? { textDecoration: 'underline'} 
              : {} 
          } 
          to="/"
        >
          Home
        </Link>
        <Link 
          style={ 
            location.pathname === "/about" 
              ? { textDecoration: 'underline'} 
              : {} 
          }
          to="/about"
        >
          About us
        </Link>
      </div>
    </nav>
  )
}

export default Navbar;
