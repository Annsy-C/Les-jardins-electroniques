import React from "react";
import { Box, BoxContent, BoxTitle, BoxImage, BoxIcon, BoxParagraph} from "../../elements/box";
import MeteoBox from "../../elements/meteoBox";

function Observer ({ reference }) {
  {/* TODO : remplacer les données exemples en dur par les données issues des capteurs */}
  const temperature = "18 C°";
  const humidite = "18 g/m3";
  const pluviometrie = "18 mL";
  const vitesseVent = "18 km/h";
  const orientationVent = "NE";
  const pressionAtmospherique = "18 Bar";

  return(
    <div ref={reference}>
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-family-secondary">Observer</h1>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="content">
          <div className="columns">
          {/* TODO : intégrer le Livestream */}
            <div className="column">
              <Box >
                <BoxContent>
                  <BoxTitle title = "(LiveStream à venir)"/>
                  <BoxImage src="/images/photos_potager/2.jpg" alt="photo du potager" />
                </BoxContent>
              </Box>
            </div>
            <div className="column">
              <MeteoBox />
              <Box height={false}>
                <BoxContent>
                  <BoxTitle title = "Météo du potager :"/>
                </BoxContent>
              </Box>
              <div className="columns">
                <div className="column is-4">
                  <Box height={false}>
                    <BoxContent>
                      <BoxParagraph>
                        <p>Température</p>
                      </BoxParagraph>
                    </BoxContent>
                    <BoxContent>
                      <BoxIcon icon="fas fa-thermometer-half" />
                    </BoxContent>
                    <BoxContent>
                      <BoxParagraph>
                        <p>{temperature}</p>
                      </BoxParagraph>
                    </BoxContent>
                  </Box>
                </div>
                <div className="column is-4">
                  <Box height={false}> 
                    <BoxContent>
                      <BoxParagraph>
                        <p>Humidité de l'air</p>
                      </BoxParagraph>
                    </BoxContent>
                    <BoxContent>
                      <BoxIcon icon="fas fa-tint" />
                    </BoxContent>
                    <BoxContent>
                      <BoxParagraph>
                        <p>{humidite}</p>
                      </BoxParagraph>
                    </BoxContent>
                  </Box>
                </div>
                <div className="column is-4">
                  <Box height={false}>
                    <BoxContent>
                      <BoxParagraph>
                        <p>Pluviométrie</p>
                      </BoxParagraph>
                    </BoxContent>
                    <BoxContent>
                      <BoxIcon icon="fas fa-umbrella" />
                    </BoxContent>
                    <BoxContent>
                      <BoxParagraph>
                        <p>{pluviometrie}</p>
                      </BoxParagraph>
                    </BoxContent>
                  </Box>
                </div>
              </div>
              <div className="columns">
                <div className="column is-4">
                  <Box height={false}>
                    <BoxContent>
                      <BoxParagraph>
                        <p>Vitesse vent</p>
                      </BoxParagraph>
                    </BoxContent>
                    <BoxContent>
                      <BoxIcon icon="fas fa-signature"/>
                    </BoxContent>
                    <BoxContent>
                      <BoxParagraph>
                        <p>{vitesseVent}</p>
                      </BoxParagraph>
                    </BoxContent>
                  </Box>
                </div>
                <div className="column is-4">
                  <Box height={false}>
                    <BoxContent>
                      <BoxParagraph>
                        <p>Orientation du vent</p>
                      </BoxParagraph>
                    </BoxContent>
                    <BoxContent>
                      <BoxIcon icon="fas fa-compass" />
                    </BoxContent>
                    <BoxContent>
                      <BoxParagraph>
                        <p>{orientationVent}</p>
                      </BoxParagraph>
                    </BoxContent>
                  </Box>
                </div>
                <div className="column is-4">
                  <Box height={false}>
                    <BoxContent>
                      <BoxParagraph>
                        <p>Pression atmosphérique</p>
                      </BoxParagraph>
                    </BoxContent>
                    <BoxContent>
                      <BoxIcon icon="fas fa-flask" />
                    </BoxContent>
                    <BoxContent>
                      <BoxParagraph>
                        <p>{pressionAtmospherique}</p>
                      </BoxParagraph>
                    </BoxContent>
                  </Box>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    );
  }

export default Observer;