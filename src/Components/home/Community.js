import React from 'react';
import iconFamily from '../../img/icons/icon-family.png'; 

function Community() {
  return(
    <section className="vertical-padding">
      <h2>
        Created for the community
      </h2>
      <div className="community horizontal-content">
        <div>
          <div className="icon-background">
            <h2 style={{ color: '#4A69D9' }}>
              8%
            </h2>
          </div>
          
          <p>
            of the entire U.S. population is LEP, with the LEP population continually growing over time.
          </p>
        </div>
        <div>
          <div className="icon-background">
            <img className="icon" src={iconFamily} alt="family icon" />
          </div>
          <p>
            From reading bills to translating conversations with coworkers, LEP populations rely heavily on family members, often their children, for help.
          </p>
        </div>
        <div>
          <div className="icon-background">
            <h2 style={{ color: '#4A69D9' }}>
              27%
            </h2>
          </div>
          <p>
            of foreign-born immigrants have less than high school education. Limited reading and writing comprehension in their home language renders existing online translation services ineffective.
          </p>
        </div>
      </div>
    </section>

  )
}

export default Community;
