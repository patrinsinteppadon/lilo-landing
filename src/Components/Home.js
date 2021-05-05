import React from 'react';
import placeholderImg from '../img/placeholder.png';
import homeScreenImg from '../img/requester-home-screens.png';
import notificationImg from '../img/translator-notification.png';
import videoCallImg from '../img/video-call.png';
import reviewImg from '../img/requester-review-screens.png';
import languageImg from '../img/language-screen.png';
import accessibilityImg from '../img/accessibility-screen.png';
import tutorialImg from '../img/tutorial-screen.png';
import feedbackImg from '../img/feedback-screen.png';
import './home.css';

function Home() {
  return(
    <div className="home-page">
      <section className="summary">
        <div>
          <h1>
            Summary of service in one line
          </h1>
          <p>
            About text here... what it is, similar to abstract, text text text text text text text text text text text text text text text text text text text text text text text text text text text text 
          </p>
        </div>
        <div>
          <img src={placeholderImg} alt="placeholder" />
        </div>
      </section>
      <section className="why">
        <div>
          <h1>
            Why it's important...
          </h1>
          <p>
            about impact of translation barrier on immigrant groups, stats text text text text text text text text text text text text text text text text text text text text text text text text text text text text 
          </p>
        </div>
      </section>
      <section className="how-it-works">
        <h1>How it Works</h1>

        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '30px' }}>
          <div style={{ width: '40%', marginLeft: '10px' }}>
            <img src={homeScreenImg} alt="home screens for the requester"/>
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
      <section>
        <h1>
          Accommodations
        </h1>
        <div>
          <div style={{ display: 'flex' }}>
            <div style={{ width: '20%', marginLeft: '5%' }}>
              <img src={languageImg} alt="languages screen"/>
              <p>Customize language options</p>
            </div>
          </div>
          <div style={{ display: 'flex' }}>
            <div style={{ width: '20%', marginLeft: '25%' }}>
              <img src={accessibilityImg} alt="accessibilities screen"/>
              <p>Request accessibility accommodations</p>
            </div>
          </div>
          <div style={{ display: 'flex' }}>
            <div style={{ width: '20%', marginLeft: '45%' }}>
              <img src={tutorialImg} alt="tutorial screen"/>
              <p>Guidance through onboarding & tutorial</p>
            </div>
          </div>
          <div style={{ display: 'flex' }}>
            <div style={{ width: '20%', marginLeft: '70%' }}>
              <img src={feedbackImg} alt="feedback screen"/>
              <p>Feedback to monitor platform environment & future app iterations</p>
            </div>
          </div>
        </div>
      </section>
      <section className="try-it">
        <div>
          <h1>
            Try it
          </h1>
          <div style={{ display: 'flex', flexDirection: 'row'}}>
            <div>
              <p>
                Link to Figma: Translator view
              </p>
            </div>
            <div>
              <p>
                Link to Figma: Requestor view
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
    
  )
}

export default Home;
