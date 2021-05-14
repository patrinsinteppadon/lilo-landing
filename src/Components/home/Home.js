import React from 'react';
import './home.css';

import Summary from './Summary.js';
import Why from './Why.js';
import Community from './Community.js';
import HowItWorks from './HowItWorks.js';
import Accommodations from './Accommodations.js';
import TryIt from './TryIt.js';
import Footer from '../Footer.js';

function Home() {
  return(
    <div className="home-page">
      <Summary />
      <Why />
      <Community />
      <HowItWorks />
      <Accommodations />
      <TryIt />
      <Footer />
    </div>
    
  )
}

export default Home;
