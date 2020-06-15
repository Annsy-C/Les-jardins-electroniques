import React from "react";

function Observer (props) {
    return(
    <>
      <section className="hero is-primary">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title is-family-secondary">Observer</h1>
                </div>
            </div>
      </section>
      <section className="section">
            <div className="container">
                <div class="columns">
                  {/* TODO : intégrer le Livestream */}
                  <div className="column">
                    <img src="/images/photos_potager/2.jpg" alt="photo du potager"/>
                    <p>(Livestream à venir)</p>
                  </div>
                  {/* TODO : remplacer les éléments en dur par les données des capteurs */}
                  <div className="column">
                    <div className="columns">
                      <div className="column">T °C</div>
                      <div className="column">Humidité de l'air</div>
                      <div className="column">Luminosité</div>
                      <div className="column">Température globale</div>
                    </div>
                    <div className="columns">
                        <div className="column">Vitesse vent</div>
                        <div className="column">Orientation vent</div>
                        <div className="column">pluviométrie du jour</div>
                        <div className="column">pression atmosphérique</div>
                    </div>
                  </div>
                </div>
              </div>
      </section>
    </>
    );
  }

export default Observer;