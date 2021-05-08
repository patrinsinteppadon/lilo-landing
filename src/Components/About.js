import React from 'react';
import Contact from './Contact.js';
import contactPlaceholder from '../img/contact-card-placeholder.png';
import './about.css';

function About() {
  return(
    <div className="about-page">
      <section className="overview">
        <div>
          <h1>
            About the project
          </h1>
          <p>
            This is a University of Washington Information School Capstone project for Winter/Spring 2021. 
          </p>
          <p>
            The backend of the application is inactive. The project will shut down May 26th.
          </p>
        </div>
      </section>
      <hr style={{ width: '20%', borderBottom: '2px solid #4A69D9' }}/>
      <section className="contact-us" style={{ marginTop: '50px' }}>
      <div>
          <h1>
            Contact Us
          </h1>
          <div className="row">
            <Contact 
              name="Michelle Lee"
              role="Product Manager"
              email="mlee18@uw.edu"
              linkedin="https://www.linkedin.com/in/themichellelee/"
            />
            <Contact 
              name="Patrin Sinteppadon"
              role="Developer"
              email="sintep@uw.edu"
              linkedin="localhost:3000"
            />
          </div>
          <div className="row">
            <Contact 
              name="Paola Vanegas"
              role="Developer"
              email="pvdt@uw.edu"
              linkedin="https://www.linkedin.com/in/paola-vanegas-a83705190/"
            />
            <Contact 
              name="Tiffany Wong"
              role="UX Designer"
              email="wongct@uw.edu"
              linkedin="https://www.linkedin.com/in/wongctiffany1/"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default About;
