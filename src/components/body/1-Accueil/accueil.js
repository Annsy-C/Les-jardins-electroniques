import React from "react";

function Accueil (props) {
    return(
    <div id="accueil_part">
        {/*<section className="hero is-primary">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title is-family-secondary">Accueil</h1>
                </div>
            </div>
        </section>*/}
        <section className="section has-background-light">
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