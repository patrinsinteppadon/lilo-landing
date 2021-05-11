import React from 'react';

import howItWorksImg from '../../img/requester-home-screens.png';
import notificationImg from '../../img/translator-notification.png';
import videoCallImg from '../../img/video-call.png';
import reviewImg from '../../img/requester-review-screens.png';

function HowItWorks() {
  return(
    <section className="how-it-works vertical-padding">
      <h2>How it Works</h2>

      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '30px' }}>
        <div style={{ width: '40%', marginLeft: '10px' }}>
          <img src={howItWorksImg} alt="home screens for the requester"/>
        </div>
        <div style={{ width: '70%' }}>
          <p>User requests translation help through the home screen</p>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '30px' }}>
        <div style={{ width: '70%' }}>
          <p>volunteer translators who are comfortable in the indicated languages receive a notification</p>
        </div>
        <div style={{ width: '18%' }}>
          <img src={notificationImg} alt="notification for a translator"/>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '30px' }}>
        <div style={{ width: '18%', marginLeft: '50px' }}>
          <img src={videoCallImg} alt="video call"/>
        </div>
        <div style={{ width: '70%' }}>
          <p>The translator is connected with the requestor</p>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '30px' }}>
        <div style={{ width: '70%' }}>
          <p>both users are invited to leave feedback and further details based on their selected star rating</p>
        </div>
        <div style={{ width: '18%' }}>
          <img src={reviewImg} alt="review screens at the end of the call"/>
        </div>
      </div>
    </section>

  )
}

export default HowItWorks;
