import React from 'react';
import contactPlaceholder from '../img/contact-card-placeholder.png';
import './about.css';

function About() {
  return(
    <div className="about-page">
      <section className="overview">
        <div>
          <h1>
            The Project
          </h1>
          <p>
            This is a University of Washington Information School Capstone project for Winter/Spring 2021. 
          </p>
          <p>The backend of the application is inactive.</p>
          <p>The project will shut down May 26th.</p>
        </div>
      </section>
      <hr style={{ width: '20%', borderBottom: '2px solid #4A69D9' }}/>
      <section className="contact-us" style={{ marginTop: '50px' }}>
      <div>
          <h1>
            Contact Us
          </h1>
          <div>
            <img 
              style={{ width: '25%' }}
              src={contactPlaceholder} 
              alt="contact placeholder"
            />
            <img 
              style={{ width: '25%' }}
              src={contactPlaceholder} 
              alt="contact placeholder"
            />
          </div>
          <div>
            <img 
              style={{ width: '25%' }}
              src={contactPlaceholder} 
              alt="contact placeholder"
            />
            <img 
              style={{ width: '25%' }}
              src={contactPlaceholder} 
              alt="contact placeholder"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default About;
