import React from 'react';
import './home.css';

import homeScreenImg from '../img/screens/home-screen.png';
import howItWorksImg from '../img/requester-home-screens.png';
import notificationImg from '../img/translator-notification.png';
import videoCallImg from '../img/video-call.png';
import reviewImg from '../img/requester-review-screens.png';

import iconGlobe from '../img/icons/icon-globe.png';
import iconPeople from '../img/icons/icon-people.png';
import iconBook from '../img/icons/icon-book.png';
import iconCall from '../img/icons/icon-call.png';

/**
 * icons: feathericons
 * icons8 is the source for an icon for Community section. named family-ios
 *   - https://icons8.com/icons/set/family-ios
 * 
 * todo:
 * - add an underline to show which page you're on in the navbar
 *   (do so by passing state from App to Navbar probably)
 */
function Home() {
  return(
    <div className="home-page">
      <section className="summary">
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
      <section className="why vertical-padding">
          <h2>
            Why Wave
          </h2>
          <p style={{ marginTop: '0' }}>
            Approximately half of the U.S. immigrant population is limited English proficient (LEP). The language barrier leads to stress and health issues and hinders immigrants’ employment opportunities, social environment, and more. Existing translation services fail to capture the context and complexity of situations, and are often unusable for immigrants with limited reading and writing comprehension in their home language. 
          </p>
          <p style={{ marginBottom: '40px' }}>
            Our app provides real-time, interactive translation help from multilingual volunteers who can further explain translations and the context surrounding them, whether cultural or technological. Wave helps limited English proficient users navigate daily life with independence and peace of mind.
          </p>
      </section>

      <section className="vertical-padding">
        <h2>
          Created for the community
        </h2>
        <div className="horizontal-content">
          <div>
            <img 
              style={{ width: '100px' }}
              src={iconGlobe} 
              alt='globe icon' />
            <p>
              of the entire U.S. population is LEP, with the LEP population continually growing over time.
            </p>
          </div>
          <div>
            <img 
              style={{ width: '100px' }}
              src={iconPeople} 
              alt='people icon' />
            <p>
              From reading bills to translating conversations with coworkers, LEP populations rely heavily on family members, often their children, for help.
            </p>
          </div>
          <div>
            <img 
              style={{ width: '100px' }}
              src={iconBook} 
              alt='book icon' />
            <p>
              of foreign-born immigrants have less than high school education. Limited reading and writing comprehension in their home language renders existing online translation services ineffective.
            </p>
          </div>
        </div>
      </section>

      <section className="how-it-works">
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
      <section className="vertical-padding">
        <h2>
          Accommodations
        </h2>
        <div className="horizontal-content">
          <div>
            <img 
              style={{ width: '100px' }}
              src={iconGlobe} 
              alt='globe icon' />
            <p>
              Customize in-app language options
            </p>
          </div>
          <div>
            <img 
              style={{ width: '100px' }}
              src={iconPeople} 
              alt='people icon' />
            <p>
              Request accessibility accommodations
            </p>
          </div>
          <div>
            <img 
              style={{ width: '100px' }}
              src={iconBook} 
              alt='book icon' />
            <p>
              Guidance through onboarding and tutorial
            </p>
          </div>
          <div>
            <img 
              style={{ width: '100px' }}
              src={iconCall} 
              alt='call icon' />
            <p>
              Feedback to monitor platform environment & future app iterations
            </p>
          </div>
        </div>
      </section>
      <section className="try-it">
        <div>
          <h2>
            Try it
          </h2>
          <div style={{ display: 'flex', flexDirection: 'row'}}>
            <div>
              <p>
                Link to Figma: Translator view
              </p>
              <iframe style={{border: "1px solid rgba(0, 0, 0, 0.1)", width: "800", height: "450" }} src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FgEySL44JG37tE2GGXR66PT%2FINFO490-Experiment-626%3Fnode-id%3D682%253A108%26scaling%3Dscale-down%26page-id%3D648%253A742" allowfullscreen></iframe>
            </div>
            <div>
              <p>
                Link to Figma: Requestor view
              </p>
              <iframe style={{border: "1px solid rgba(0, 0, 0, 0.1)", width: "800", height: "450" }} src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FgEySL44JG37tE2GGXR66PT%2FINFO490-Experiment-626%3Fnode-id%3D1122%253A1442%26scaling%3Dscale-down%26page-id%3D1119%253A1231" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
    
  )
}

export default Home;
