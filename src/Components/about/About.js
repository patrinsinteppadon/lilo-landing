import React from 'react';
import Contact from './Contact.js';
import './about.css';

import michelleImg from '../../img/developers/michelle.jpg';
import patrinImg from '../../img/developers/patrin.png';
import paolaImg from '../../img/developers/paola.jpg';
import tiffanyImg from '../../img/developers/tiffany.png';

function About() {
  return(
    <div className="about-page">
      <section className="overview">
        <div>
          <h2>
            About the project
          </h2>
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
          <h2>
            Contact Us
          </h2>
          <div className="row">
            <Contact 
              name="Michelle Lee"
              role="Product Manager"
              email="mlee18@uw.edu"
              linkedin="https://www.linkedin.com/in/themichellelee/"
              img={michelleImg}
            />
            <Contact 
              name="Patrin Sinteppadon"
              role="Developer"
              email="sintep@uw.edu"
              linkedin="localhost:3000"
              img={patrinImg}
            />
          </div>
          <div className="row">
            <Contact 
              name="Paola Vanegas"
              role="Developer"
              email="pvdt@uw.edu"
              linkedin="https://www.linkedin.com/in/paola-vanegas-a83705190/"
              img={paolaImg}
            />
            <Contact 
              name="Tiffany Wong"
              role="UX Designer"
              email="wongct@uw.edu"
              linkedin="https://www.linkedin.com/in/wongctiffany1/"
              img={tiffanyImg}
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default About;
