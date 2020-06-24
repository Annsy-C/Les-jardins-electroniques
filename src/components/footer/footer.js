import React from "react";
import { Box, BoxContent, BoxImage, BoxTitle, BoxParagraph } from "../elements/box";

function Footer(props) {
    return(
      <footer className="footer has-background-info">
            {/* TODO: informations à compléter */}
          <div className="columns">
            <div className="column is-4">
              <Box>
                <BoxImage src="/images/logo_ECEBORG.jpeg" alt="logo ECEBORG" size="is-64x64"/>
                <BoxContent>
                  <BoxTitle title="ECEBORG" />
                  <BoxParagraph>
                    <p>+ 33 6 60 91 27 18</p>
                  </BoxParagraph>
                </BoxContent>
              </Box>
            </div>
            <div className="column is-4">
              <Box>
                <BoxImage src="/images/logo_NOISE.jpeg" alt="logo NOISE" size="is-64x64"/>
                <BoxContent>
                  <BoxTitle title="NOISE ECE" />
                  <BoxParagraph>
                  </BoxParagraph>
                </BoxContent>
              </Box>
            </div>
          </div>
        <div className="content">
          {/* TODO : Rajouter le lien lorque mon site sera prêt*/}
          <p>Site Les Jardins Electroniques par <a href="">Anne-Sylvie Chollet</a>.</p>
          <p>Logo par <a href="http://charlotte-vanel.fr">Charlotte Vanel</a>.</p>
          {/* TODO: Rajouter la carte avec la position de l'école sur Google map */}
        </div>
      </footer>
    );
  }

export default Footer;