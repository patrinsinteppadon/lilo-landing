import React from 'react';
import './contact.css';

function Contact({ name, role, email, linkedin, img }) {
  return(
    <div className="contact-card">
      <div className="img-container">
        <img 
          style={{ borderRadius: "50%"}}
          src={img} 
          alt={name}
        />
      </div>
      <div className="contact-details">
        <h3>{name}</h3>
        <p>{role}</p>
        <a href = {"mailto: " + email}>{email}</a><br/>
        <a target="_blank" href={linkedin}>Linkedin</a>
      </div>
    </div>
  )
}

export default Contact;
