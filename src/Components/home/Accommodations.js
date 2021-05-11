import React from 'react';

import iconGlobe from '../../img/icons/icon-globe.svg';
import iconPeople from '../../img/icons/icon-people.svg';
import iconBook from '../../img/icons/icon-book.svg';
import iconCall from '../../img/icons/icon-call.svg';

function Accommodations() {
  return(
    <section className="vertical-padding">
      <h2>
        Accommodations
      </h2>
      <div className="accommodations horizontal-content">
        <div>
          <div className="icon-background">
            <img 
              className="icon"
              src={iconGlobe} 
              alt='globe icon' 
            />
          </div>
          <p>
            Customize in-app language options
          </p>
        </div>
        <div>
          <div className="icon-background">
            <img 
              className="icon"
              src={iconPeople} 
              alt='people icon' 
            />
          </div>
          <p>
            Request accessibility accommodations
          </p>
        </div>
        <div>
          <div className="icon-background">
            <img 
              className="icon"
              src={iconBook} 
              alt='book icon' 
            />
          </div>
          <p>
            Guidance through onboarding and tutorial
          </p>
        </div>
        <div>
          <div className="icon-background">
            <img 
              className="icon"
              src={iconCall} 
              alt='call icon' 
            />
          </div>
          <p>
            Feedback to monitor platform environment & future app iterations
          </p>
        </div>
      </div>
    </section>
  )
}

export default Accommodations;
