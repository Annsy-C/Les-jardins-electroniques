import React from "react";
import { Card, CardContent, CardTitle, CardParagraph, CardIcon, CardButton } from "../../elements/card";

function NousAider ({ reference }) {
  return(
    <div ref={reference}>
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
            <h2 className="title is-family-secondary has-text-centered">Vous êtes intéressés par notre projet et souhaitez-vous investir ? Plusieurs façons existent.</h2>
            <br/>
          </content>
          <div className="columns">
            {/* TODO : rajouter les logo correspondants */}
            <div className="column">
              <Card>
                <CardContent>
                  <CardIcon icon="fas fa-user-graduate" />
                  <CardTitle title="Elèves de l’ECE Paris ou du Campus Eiffel :"/>
                  <CardButton />
                  <CardParagraph>
                    <p>Ce projet existe en premier lieu pour vous! Venez nous rejoindre dans l’aventure, participer aux évènements ponctuels pour semer, planter, entretenir et récolter les produits du potager!</p>
                    <p>Vous vous sentez la main verte et voulez changer le monde ? Vous pouvez vous impliquer à plus grande échelle dans le projet en devenant un responsable! Rejoignez-nous!</p>
                  </CardParagraph>
                </CardContent>
              </Card>
            </div>
            <div className="column">
              <Card>
                <CardContent>
                  <CardIcon icon="fas fa-chalkboard-teacher" />
                  <CardTitle title="Professeurs / membres de l'administration du Campus Eiffel:"/>
                  <CardButton />
                  <CardParagraph>
                    <p>Vous êtes bien évidemment les bienvenus sur le potager pour participer aux évènements ponctuels et nous serons ravis de vous avoir dans nos rangs! Si vous voulez récolter des fraises entre deux copies ou entre deux dossiers c’est maintenant, suivez nous sur les réseaux sociaux!</p>
                    <p>Nous serions également ravis d’avoir votre avis et vos conseils sur le projet!</p>
                  </CardParagraph>
                </CardContent>
              </Card>
            </div>
            <div className="column">
              <Card>
                <CardContent>
                  <CardIcon icon="fas fa-user-tie" />
                  <CardTitle title="Entreprises :"/>
                  <CardButton />
                  <CardParagraph>
                    <p>Vous souhaitez investir dans un projet durable au sein de votre démarche RSE ? Vous voulez aider un groupe de jeunes entrepreneurs prêt à mettre leurs études au service de l’agriculture de demain ? Nous serions ravis de vous compter parmi nos partenaires. Nous acceptons les financements et les dons de matériels qui nous permettent d’aller toujours plus loin dans notre projet. En contrepartie nous communiquons sur votre entreprise et pouvons organiser des ateliers et visites pour vos employés ainsi que vous offrir des légumes bien évidemment.</p>
                  </CardParagraph>
                  <CardParagraph>
                    <p>Découvrez notre plaquette sponsor <a href="">ici</a>!</p>
                  </CardParagraph>
                </CardContent>
              </Card>
            </div>
          </div>
          <content className="content">
            <h3 className="title is-family-secondary has-text-centered">Nous sommes ouverts à tous alors n’hésitez pas !</h3>
          </content>
        </div>
      </section>
    </div>
    );
  }

export default NousAider;