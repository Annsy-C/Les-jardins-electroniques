import React from "react";

function Accueil (props) {
    return(
    <>
        <section className="hero is-primary">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title is-family-secondary">Accueil</h1>
                </div>
            </div>
        </section>
        <section className="section">
            <div className="container">
                <content className="content">
                    <h2>Bienvenue sur le site du potager urbain de l'ECE</h2>
                    <img src="/images/photos_potager/1.jpg" alt="potager de l'ECE"/>
                    <div className="columns">
                        <div className="column">
                        {/* TODO: remplacer le logo par la version jpg ou png (sinon ne fonctionne pas) */}
                            <img src="/images/logo_ECEBORG.ai" alt="logo ECEBORG"/>
                        </div>
                        <div className="column">
                            <img src="/images/logo_ECE.jpeg" alt="logo ECE"/>
                        </div>
                        <div className="column">
                            <img src="/images/logo_NOISE.jpeg" alt="logo NOISE"/>
                        </div>
                    </div>
                </content>
            </div>
        </section>
    </>
    );
  }

export default Accueil;