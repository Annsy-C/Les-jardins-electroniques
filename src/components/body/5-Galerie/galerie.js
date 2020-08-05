import React from "react";
import { Box, BoxImage, BoxContent } from "../../elements/box";

{/* TODO : Rajouter les liens FlickR correspondants href des balises <a> */}

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
            <h2 className="title is-family-secondary has-text-centered">Découvrez le potager en images</h2>
          </content>
          <div className="columns">
            <div className="column">
              <Box hoverable={true}>
                <BoxContent>
                  <a href=""><BoxImage src="/images/galerie/image_1.jpg" alt="image 1" size="is-1by1"/></a>
                </BoxContent>
              </Box>
            </div>
            <div className="column">
              <Box hoverable={true}>
                <BoxContent>
                <a href=""><BoxImage src="/images/galerie/image_2.jpg" alt="image 2" size="is-1by1"/></a>
                </BoxContent>
              </Box>
            </div>
            <div className="column">
              <Box hoverable={true}>
                <BoxContent>
                  <a href=""><BoxImage src="/images/galerie/image_3.jpg" alt="image 3" size="is-1by1"/></a>
                </BoxContent>
              </Box>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <Box hoverable={true}>
                <BoxContent>
                  <a href=""><BoxImage src="/images/galerie/image_4.jpg" alt="image 4" size="is-1by1"/></a>
                </BoxContent>
              </Box>
            </div>
            <div className="column">
              <Box hoverable={true}>
                <BoxContent>
                  <a href=""><BoxImage src="/images/galerie/image_5.jpg" alt="image 5" size="is-1by1"/></a>
                </BoxContent>
              </Box>
            </div>
            <div className="column">
              <Box hoverable={true}>
                <BoxContent>
                  <a href=""><BoxImage src="/images/galerie/image_6.jpg" alt="image 6" size="is-1by1"/></a>
                </BoxContent>
              </Box>
            </div>
          </div>
        </div>
      </section>
    </div>
    );
  }

export default Galerie;