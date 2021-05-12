import React from 'react';

import requestorImg from '../../img/screens/requestor.png';
import notificationImg from '../../img/screens/notification.png';
import callImg from '../../img/screens/call.png';
import reviewImg from '../../img/screens/requestor-feedback.png';

function HowItWorks() {
  return(
    <section className="how-it-works vertical-padding">
      <h2>How it works</h2>

      <div>
        <img 
          style={{width: '40%'}} 
          src={requestorImg} 
          alt="home screens for the requester"
        />
          <p>
            Limited English proficient user requests translation help through the home screen
          </p>
      </div>

      <div>
          <p>Volunteer translators who are comfortable in the indicated languages receive a notification</p>
          <img 
            style={{width: '25%'}} 
            src={notificationImg} 
            alt="notification for a translator"
          />
      </div>

      <div>
          <img 
            style={{width: '25%'}} 
            src={callImg} 
            alt="video call"
          />
        <div>
          <p>The translator is connected to the requestor</p>
        </div>
      </div>

      <div>
        <div>
          <p>Both users are invited to leave feedback and further details based on their selected star rating</p>
        </div>
          <img 
            style={{width: '25%'}} 
            src={reviewImg} 
            alt="review screens at the end of the call"
          />
      </div>
    </section>

  )
}

export default HowItWorks;
