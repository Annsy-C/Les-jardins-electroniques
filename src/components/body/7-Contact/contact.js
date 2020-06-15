import React from "react";

function Contact (props) {
    return(
      <>
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-family-secondary">Contact</h1>
          </div>
        </div>
      </section> 
      <section className="section">
        <div className="container">
          <content className="content">
            <div className="columns">
              {/* TODO: informations à compléter */}
              <div className="column">
                <img src="" alt="logo ECEBORG"/>
                <p> ECEBORG</p>
                <p>+ 33 6 60 91 27 18</p>
              </div>
              <div className="column">
                <img src="/images/logo_NOISE.jpeg" alt="logo NOISE"/>
                <p>NOISE ECE</p>
              </div>
            </div>
            <p>(Formulaire de contact)</p>
          </content>
        </div>
      </section>
    </>
    );
  }

export default Contact;