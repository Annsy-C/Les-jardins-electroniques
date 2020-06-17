import React from "react";

function Historique (props) {
    return(
    <>
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-family-secondary">Historique</h1>
          </div>
        </div>
      </section> 
      <section className="section">
        <div className="container">
          <content className="content">
            <ul>
              {/* TODO : Remplacer les photos par celles correctes */}
              <li>
                <h3>Début du projet :</h3>
                <p>Le potager nait en Juin 2018 lorsque les associations Eceborg et NOISE contactent les services généraux et l’administration pour leur présenter le projet. S’en suit une visite du toit comme vous pouvez l’admirer à son origine.</p>
                <div className="columns">
                  <div className="column">
                    <img src="" alt="débuts du potager"/>
                  </div>
                  <div className="column">
                    <img src="" alt="débuts du potager"/>
                  </div>
                </div>
              </li>
              <li>
                <h3>Visite de Veni, Verdi :</h3>
                <p>Les responsables du projet visite un potager de l’association Veni Verdi pour échanger autour de l’agriculture urbaine et leur demander conseil avant de se lancer.</p>
                <p>Découvrez l’association Veni Verdi <a href="https://www.veniverdi.fr/">ici</a>.</p>
                <div className="columns">
                  <div className="column">
                    <img src="" alt="Visite"/>
                  </div>
                  <div className="column">
                    <img src="" alt="Visite"/>
                  </div>
                </div>
              </li>
              <li>
                <h3>Installation des premiers bacs octobre </h3>
                <p>Le projet démarre officiellement avec la livraison de deux tonnes de terres à monter sur le toit et l’installation de plusieurs carrés potager. Nous y plantons des choux, salades et légumes d’hiver.</p>
                <div className="columns">
                  <div className="column">
                    <img src="" alt="Livraison"/>
                  </div>
                  <div className="column">
                    <img src="" alt="Livraison"/>
                  </div>
                </div>
              </li>
              <li>
                <h3>Installation des serres :</h3>
                <p>Le temps se rafraichissant nous installons des serres sur nos carrés pour aider nos plantes à passer l’hiver.</p>
              </li>
              <li>
                <h3>Premières neiges :</h3>
                <p> Le potager est touché par la neige ! C’est très beau mais les salades ne sont pas fans…</p>
              </li>
              <li>
                <h3>Installation du grand rectangle :</h3>
                <p>Au début de l’année nous installons un grand bac potager au centre du toit afin de pouvoir pratiquer de la culture sur but.</p>
              </li>
              <li>
                <h3>Installation de la serre fixe:</h3>
                <p>Afin de préparer les semis du printemps nous installons une serre. Nous la choisissons en verre pour qu’elle ne risque pas de s’envoler par grand vent.</p>
              </li>
              <li>
                <p>Il est maintenant temps de monter plus de terre sur le toit ! 5 tonnes cette fois ci !</p>
              </li>
              <li>
                <p>C’est l’heure des plantations du printemps! Plusieurs dizaines d’élève participent à l’évènement où nous repiquons nos semis réalisés sous la serre plus tôt dans l’année.</p>
              </li>
              <li>
                <p>Maintenant que le risque de gel est écarté il est temps d’installer notre arrosage automatique !</p>
              </li>
              <li>
                <h3>Installation des tuteurs.</h3>
              </li>
              <li>
                <h3>Premières récolte de patates.</h3>
              </li>
              <li>
                <h3>Premières tomates.</h3>
              </li>
              <li>
                <h3>Récolte de carrottes et radis.</h3>
              </li>
            </ul>
          </content>
        </div>
      </section>
    </>
    );
  }

export default Historique;