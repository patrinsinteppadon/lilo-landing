import React from 'react';
import placeholderImg from '../img/contact-img-placeholder.png';
import './contact.css';

function Contact({name, role, email, linkedin}) {
  return(
    <div className="contact-card">
      <div className="img-container">
        <img 
          src={placeholderImg} 
          alt="profile" 
        />
      </div>
      <div className="contact-details">
        <h2>{name}</h2>
        <p>{role}</p>
        <a href = {"mailto: " + email}>{email}</a><br/>
        <a href={linkedin}>Linkedin</a>
      </div>
    </div>
  )
}

export default Contact;
