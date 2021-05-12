import React from 'react';

import homeScreenImg from '../../img/screens/home-screen.png';
function Summary() {
  return(
      <section className="summary vertical-padding">
        <div>
          <h1 style={{ width: "100%" }}>
            Real-time translation created for limited English proficiency users
          </h1>
        </div>
        <div>
          <img 
            style={{ width: '80%' }}
            src={homeScreenImg} 
            alt="home screen and call screen" 
          />
        </div>
      </section> 
  )
}

export default Summary;
