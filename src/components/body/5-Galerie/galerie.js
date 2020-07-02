import React from "react";

function Galerie ({ reference }) {
    return(
    <div ref={ reference }>
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-family-secondary">Galerie</h1>
          </div>
        </div>
      </section> 
      <section className="section">
        <div className="container">
          <content className="content">
            <p>(En cours d'élaboration)</p>
          </content>
        </div>
      </section>
    </div>
    );
  }

export default Galerie;