import React from "react";

function NousAider (props) {
    return(
      <>
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-family-secondary">Nous aider</h1>
          </div>
        </div>
      </section> 
      <section className="section">
        <div className="container">
          <content className="content">
            <h2>Vous êtes intéressés par notre projet et souhaitez-vous investir ? Plusieurs façons existent.</h2>
            <h2>Vous êtes :</h2>
            <div className="columns">
              {/* TODO : rajouter les logo correspondants */}
              <div className="column">
                <img src="" alt="logo élève"/>
                <h3>Un élève de l’ECE Paris ou du Campus Eiffel :</h3>
                <p>Ce projet existe en premier lieu pour vous! Venez nous rejoindre dans l’aventure, participer aux évènements ponctuels pour semer, planter, entretenir et récolter les produits du potager!</p>
                <p>Vous vous sentez la main verte et voulez changer le monde ? Vous pouvez vous impliquer à plus grande échelle dans le projet en devenant un responsable! Rejoignez-nous!</p>
              </div>
              <div className="column">
                <img src="" alt="logo prof/admin"/>
                <h3>Un professeur / membre de l'administration du Campus Eiffel:</h3>
                <p> Vous êtes bien évidemment les bienvenus sur le potager pour participer aux évènements ponctuels et nous serons ravis de vous avoir dans nos rangs! Si vous voulez récolter des fraises entre deux copies ou entre deux dossiers c’est maintenant, suivez nous sur les réseaux sociaux!</p>
                <p>Nous serions également ravis d’avoir votre avis et vos conseils sur le projet!</p>
              </div>
              <div className="column">
                <img src="" alt="logo entreprise"/>
                <h3>Une entreprise :</h3>
                <p>Vous souhaitez investir dans un projet durable au sein de votre démarche RSE ? Vous voulez aider un groupe de jeunes entrepreneurs prêt à mettre leurs études au service de l’agriculture de demain ? Nous serions ravis de vous compter parmi nos partenaires. Nous acceptons les financements et les dons de matériels qui nous permettent d’aller toujours plus loin dans notre projet. En contrepartie nous communiquons sur votre entreprise et pouvons organiser des ateliers et visites pour vos employés ainsi que vous offrir des légumes bien évidemment.</p>
              </div>
            </div>
            <h3>Nous sommes ouverts à tous alors n’hésitez pas !</h3>
          </content>
        </div>
      </section>
    </>
    );
  }

export default NousAider;