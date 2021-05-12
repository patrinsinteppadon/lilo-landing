import React from 'react';
import './home.css';

import Summary from './Summary.js';
import Why from './Why.js';
import Community from './Community.js';
import HowItWorks from './HowItWorks.js';
import Accommodations from './Accommodations.js';
import TryIt from './TryIt.js';


/**
 * todo:
 * - add an underline to show which page you're on in the navbar
 *   (do so by passing state from App to Navbar probably?)
 *   (or figure out if there's a way to getCurrentRoute())
 */
function Home() {
  alert("this version has no blue line for the navbar");

  return(
    <div className="home-page">
      <Summary />
      <Why />
      <Community />
      <HowItWorks />
      <Accommodations />
      <TryIt />
    </div>
    
  )
}

export default Home;
