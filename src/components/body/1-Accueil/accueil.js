import React from "react";

function Accueil ({ reference }) {
    return(
    <div ref={reference}>
        <section className="section">
            <div className="container">
                <content className="content">
                    <h2>Bienvenue sur le site du potager urbain de l'ECE</h2>
                    <figure>
                        <img src="/images/photos_potager/1.jpg" alt="potager de l'ECE"/>
                    </figure>
                    <div className="columns">
                        <div className="column">
                            <figure className="image is-16by9">
                                <img src="/images/baniere_ECEBORG.jpeg" alt="baniere ECEBORG"/>
                            </figure>
                        </div>
                        <div className="column">
                            <figure className="image is-16by9">
                                <img src="/images/logo_ECE.jpeg" alt="logo ECE"/>
                            </figure>
                        </div>
                        <div className="column">
                            <figure className="image is-16by9">
                                <img src="/images/logo_NOISE.jpeg" alt="logo NOISE"/>
                            </figure>
                        </div>
                    </div>
                </content>
            </div>
        </section>
    </div>
    );
  }

export default Accueil;