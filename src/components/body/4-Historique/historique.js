import React, { useState } from "react";
import HistoBox from "../../elements/histoBox";
import { Box, BoxIcon, BoxContent, BoxParagraph, BoxImage, BoxTitle } from "../../elements/box";


function Historique ({ reference }) {

    const [elementId, setElementId] = useState(0);

    const histo= [
      <HistoBox title="Mai 2018 : Naissance du projet potager" 
                description="Le projet voit le jour en mai 2018 lorsque les associations NOISE et ECEBORG, respectivement 
                représentées par Thomas Cop--Gaillot et Nicolas Chollet obtiennent l'autorisation de l'ECE et des services 
                généraux du campus Eiffel d'installer un potager urbain sur le toit du bâtiment Eiffel 1."
                src="/images/Historique/1_initiative.png"
                alt="Initiative"
      />,
      <HistoBox title="Juin 2018 : Première visite du potager" 
                description="Une première visite du toit permet de mieux comprendre l'écosystème du campus et de commencer 
                la planification des infrastructures nécessaires pour le succès du projet. Lors de la rénovation du campus 
                il y quelques années, des surfaces végétalisables ont été installées ce qui nous facilite grandement 
                l'implémentation de bacs de cultures."
                src="/images/Historique/2_premiere_visite.jpg"
                alt="Première visite"
      />,
      <Box>
        <BoxContent>
            <BoxTitle title ="6 Septembre 2018 : Visite du potager par l'association Veni Verdi"/>
            <BoxParagraph>
              <p>Avant de nous lancer, nous visitons le toit de la société Enedis rue d’Aboukir qui a été transformé en
                 potager urbain par l’association Veni Verdi qui se consacre à la mise en place d’espace de culture en
                 ville et à la pédagogie autour de ceux-ci. Nous les remercions grandement pour leurs conseils. Si vous
                 voulez en apprendre plus sur l’association c’est <a href="https://www.veniverdi.fr/">ici</a>.</p>
            </BoxParagraph>
        </BoxContent>
        <BoxContent>
            <BoxImage src="/images/Historique/3_visite_veni_verdi.jpg" alt="Visite Veni Verdi" size="is-16by9"/>
        </BoxContent>
      </Box>,
      <Box>
      <BoxContent>
          <BoxTitle title ="20 Octobre 2018 : premières installations"/>
          <BoxParagraph>
            <p>La première pierre est posée ! Enfin les premiers bacs plutôt. A l’aide d’une vingtaine d’élève motivée
               nous construisons des carrés potagers et nous organisons une chaine humaine pour monter environ
               deux tonnes de terre sur le toit. Vous pouvez découvrir l’organisation de cette journée grâce à la
               vidéo de la JBTV réalisée par Louise Denis <a href="https://www.youtube.com/watch?v=OMOzosnDfmg">ici</a>.</p>
          </BoxParagraph>
      </BoxContent>
      <BoxContent>
          <BoxImage src="/images/Historique/4_premiers_bacs.jpg" alt="Premiers bacs" size="is-16by9"/>
      </BoxContent>
    </Box>,
    <HistoBox title="Fin Octobre 2018 : premières plantations" 
              description="Dans la foulée de l’installation des bacs et étant tous très impatient de commencer, nous plantons
              nos premiers légumes d’hiver (salades, radis, choux) et quelques aromatiques."
              src="/images/Historique/5_Plantation_Octobre.jpg"
              alt="plantations octobre"
    />,
    <HistoBox title="15 Novembre 2018 : installation des serres" 
              description="Afin de donner les meilleures chances à nos salades et choux, nous installons des serres sur trois des
              bacs de cultures de notre potager."
              src="/images/Historique/6_installation_serre_octobre.jpg"
              alt="installation serre"
    />,
    <HistoBox title="Décembre 2018 : premières neiges sur le toit" 
              description="Les serres ont tenu face aux premières neiges sur le potager !"
              src="/images/Historique/7_Premieres_neiges.jpg"
              alt="premières neiges"
    />,
    <Box>
      <BoxContent>
          <BoxTitle title ="15 Janvier 2019 : Visite du potager d’Agro Paris Tech."/>
          <BoxParagraph>
            <p>Le NOISE Agro Paris Tech nous invite à visiter leur prore potager urbain sur le toit de leur campus
               dans le cinquième arrondissement de Paris. Avec leur projet bien avancé et leur expérience ils ont su
               nous apporter des conseils précieux et des indications sur les contraintes des potagers en ville et sur
               les toits.</p>
          </BoxParagraph>
      </BoxContent>
      <BoxContent>
        <BoxImage src="/images/Historique/8_Agroparistech_selfie.jpg" alt="selfie agro paris tech" size="is-16by9"/>
      </BoxContent>
      <BoxContent>
        <BoxImage src="/images/Historique/8_Agroparistech_wiew.jpg" alt="view agro paris tech" size="is-16by9"/>
      </BoxContent>
    </Box>,
    <HistoBox title="21 Février 2019 : Début du grand rectangle" 
    description="Le printemps 2019 ne pointent pas encore le bout de son nez que les équipes d’ECEBORG et de
    NOISE commencent déjà la préparation de l’installation du plus grand bac de culture du potager.
    Plusieurs dispositions sont étudiées et nous commençons à déplacer les gravier qui recouvrent le sol
    pour faire place pour de la terre."
    src="/images/Historique/9_debut_grand_rectangle.jpg"
    alt="début du grand rectangle"
    />,
    <HistoBox title="25 Février 2019 : Fin du grand rectangle" 
    description="Après la réception du bois, du Douglas, une essence naturellement imputrescible sans ajout de
    produit chimiques, nous finissons de monter le grand rectangle de culture. Celui-ci fait 3 m sur 18 et
    nous permet de réaliser de la culture sur butte de manière optimal. L’idée est également de pouvoir
    « simuler » un potager au sol afin de permettre l’application de solutions robotisées pour l’entretien
    dans le futur."
    src="/images/Historique/10_Fin_du_grand_rectangle.jpg"
    alt="fin du grand rectangle"
    />,
    <Box>
      <BoxContent>
          <BoxTitle title ="7 Mars 2019 : Construction de la serre"/>
          <BoxParagraph>
            <p>Afin de</p>
          </BoxParagraph>
      </BoxContent>
      <BoxContent>
        <BoxImage src="/images/Historique/11_Construction_serre_1.jpg" alt="construction de la serre" size="is-16by9"/>
      </BoxContent>
      <BoxContent>
        <BoxImage src="/images/Historique/11_Construction_serre_2.JPG" alt="construction de la serre" size="is-16by9"/>
      </BoxContent>
    </Box>

    ];
    
    const longueur = histo.length;

    return(
    <div ref={reference}>
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
            <div className="columns">
              <button className="column button is-primary is-light is-small is-fullwidth is-rounded" onClick= {() => {
                console.log(elementId);
                setElementId((elementId === 0 ? (longueur - 1) : elementId - 1)); }
              } >
                <span className="icon">
                    <i className="fas fa-arrow-left fa-3x is-flex"></i>
                </span>
              </button>
              {histo[elementId]}
              <button className="column button is-primary is-light is-small is-fullwidth is-rounded" onClick={ () => {
                setElementId((elementId === (longueur - 1) ? 0 : elementId + 1)); }
              } >
                <span className="icon">
                    <i className="fas fa-arrow-right fa-3x is-flex"></i>
                </span>
              </button>
            </div>
            {/* ancienne version: 
            <ul>
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
              */}
          </content>
        </div>
      </section>
    </div>
    );
  }

export default Historique;