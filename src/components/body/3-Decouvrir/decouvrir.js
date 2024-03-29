import React from "react";
import { Card, CardContent, CardImage, CardTitle, CardParagraph, CardIcon, CardButton } from "../../elements/card";
import { Box, BoxContent, BoxImage, BoxTitle, BoxParagraph} from "../../elements/box";

function Decouvrir ({ reference }) {
    return(
      <div ref={reference}>
        <section className="hero is-primary">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title is-family-secondary">Découvrir</h1>
                </div>
            </div>
        </section>
        <section className="section">
          <div className="container">
            <content className="content">
              <h2 className="title is-family-secondary has-text-centered">L'Agriculture urbaine, comment? Pourquoi? Pour qui?</h2>
              <br />
            </content>
            <Box>
              <BoxContent>
                <BoxImage src="/images/photos_potager/3.jpg" alt="potager parisien vue Notre-Dame" size="is-5by3"/>
              </BoxContent>
              <BoxContent>
                <BoxParagraph>
                <p>En 2050, la population mondiale dépassera les 9 Milliards d’êtres humains et plus de 80 % d’entre eux vivront dans une zone urbaine. Dans ce contexte, produire de la nourriture en ville devient un enjeu crucial pour la qualité de vie des citoyens. De nombreuses agglomérations à travers le monde développent des solutions pour la mise en place de fermes urbaines comme la ville de Paris par exemple qui s’est fixé comme objectif de créer plus de 30 Hectares d’espace agricole d’ici 2020.</p> 
                </BoxParagraph>
              </BoxContent>
            </Box>
            <section className="section">
              <div className="content">
                <h2 className="title is-family-secondary has-text-centered">L’agriculture urbaine offre une multitude d’améliorations sociales et environnementales à tous les niveaux :</h2>
              </div>
              <div className="columns">
                <div className="column">
                  <Card>
                    <CardContent>
                      <CardTitle title="Ramener la biodiversité en ville" /> 
                    </CardContent>
                    <CardImage src="/images/photos_potager/4.jpg" alt="ruches" />
                    <CardContent>
                      <CardButton />
                      <CardParagraph>
                        <p>En offrant des espaces verts naturels cultivés de manière écologique, de nombreuses espèces peuvent ainsi disposer d’un écosystème propre profitant aux plantes comme aux animaux et insectes. Ces espaces contribuent à l’amélioration du climat en ville et à la diminution des pollutions en captant les particules fines et le CO2.</p>
                      </CardParagraph>
                    </CardContent>
                  </Card>
                </div>
                <div className="column">
                    <Card>
                      <CardContent>
                        <CardTitle title="Favoriser les circuits courts" /> 
                      </CardContent>
                      <CardImage src="/images/photos_potager/5.jpg" alt="légumes" /> 
                      <CardContent>
                        <CardButton />               
                        <CardParagraph>
                        <p>D’après la FAO (Food & Agriculture Organizations) un mètre carré de culture en ville peut produire jusqu’à 20 Kg de nourriture par an soit quinze fois plus que les potagers en zone rurale. Cette nourriture est ensuite distribuée en circuit court aux habitants proches diminuant ainsi le transport de la nourriture et donc la pollution engendrée par celui-ci mais également les coûts de production. Également il faut savoir qu’aujourd’hui, la majorité des variétés cultivées sont sélectionnées en fonction de leur facilité de transport. En supprimant cette contrainte nous pouvons produire des denrées alimentaires de meilleure qualité, plus fraîches, contribuant ainsi à la santé du consommateur.</p>
                        </CardParagraph>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="column">
                    <Card>
                      <CardContent>
                        <CardTitle title="Créer du lien social" /> 
                      </CardContent>
                      <CardImage src="/images/photos_potager/6bis.jpg" alt="membres de l'association" /> 
                      <CardContent>
                        <CardButton />                 
                        <CardParagraph>
                        <p>Les citoyens sont mis en contact direct avec la nature, augmentant ainsi leur bien-être. Les espaces de culture peuvent être partagés et gérés entre voisins et deviennent ainsi des espaces d’échanges et de rencontre pour les habitants du quartier où se situe une ferme urbaine. Les fermes urbaines d’entreprises peuvent aussi être un bon moyen de rassembler ses employés autour d’un projet commun ponctué d’activités et de repas avec les aliments produits.</p>
                        </CardParagraph>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </section>
              <section className="section">
                <div className="content">
                  <h2 className="title is-family-secondary has-text-centered">L'ECE participe à cette révolution!</h2>
                  <p>Consciente des enjeux majeurs de l’agriculture urbaine, l’ECE Paris.Lyon a décidé de mettre en place un potager sur le toit de son campus en octobre 2018. C’est un projet nouveau, colossal, et surtout un peu fou issu du partenariat entre deux associations étudiantes de l’école.</p>
                </div>
                <div className="columns">
                  <div className="column">
                    <Card>
                      <CardContent>
                        {/*
                        <figure className="image is-128x128">
                          <img src="/images/logos/baniere_ECEBORG.jpeg" alt="baniere ECEBORG" className="is-rounded" />
                        </figure>
                        */}
                        <CardTitle title="ECEBORG" subtitle="association de robotique et d'électronique" />
                      </CardContent>
                      {/* TODO : attention, le site Eceborg ne s'ouvre pas forcément sur tout les navigateurs*/}
                      <a href="https://www.eceborg.fr/"><CardImage src="/images/photos_potager/7.jpg" alt="ECEBORG" hoverable={true} /></a>
                    </Card>
                  </div>
                  <div className="column">
                    <Card>
                      <CardContent>
                        <CardTitle title="NOISE ECE" subtitle="Nouvel observatoire des innovations sociales et environnementales"/>
                      </CardContent>
                    <a href="https://the-noise.org"><CardImage src="/images/photos_potager/8.jpg" alt="NOISE ECE" hoverable={true}/></a>
                    </Card>
                  </div>
                </div>
                <div className="content">
                  <p>Ce regroupement de jeunes femmes et hommes en manque de verdure a décidé d’installer un potager sur le toit de l'un des bâtiments du campus Eiffel afin d’apporter l’agriculture dans la ville et de s’impliquer concrètement dans la transition verte de notre société.</p>
                  <h2 className="title is-family-secondary has-text-centered">La volonté de ces associations est double :</h2>
                  <Box>
                    <BoxContent>
                      <BoxTitle title="Proposer un espace de pratique et de sensibilisation :"/>
                      <BoxParagraph>
                      <p>L’idée est de permettre aux élèves et professeurs et au personnel administratif du campus Eiffel de découvrir la culture maraichère, les techniques agricoles et les bonnes pratiques pour produire et récolter de manière écologique dans un milieu urbain afin de sensibiliser le plus de monde possible. Le potager est ainsi devenu un espace de rencontre et d’échanges pour tous les habitants du campus Eiffel.</p>
                      </BoxParagraph>
                    </BoxContent>
                    <BoxContent>
                      <BoxImage size="is-5by3" src="/images/photos_potager/9.jpg" alt="regroupement autour du potager"/>
                      </BoxContent>
                  </Box>
                  <Box>
                    <BoxContent>
                      <BoxImage size="is-5by3" src="/images/photos_potager/10.jpg" alt="robot capteur"/>
                    </BoxContent>
                    <BoxContent>
                      <BoxTitle title="Répondre aux contraintes d’une telle installation de manière durable grâce à la technologie :"/>
                      <BoxParagraph>
                      <p>Situé à quelques centaines de mètres de la tour Eiffel, encastré entre les immeubles modernes de Beaugrenelle et l’architecture typique du XVe arrondissement, notre potager est soumis à un écosystème particulier avec ses avantages et ses inconvénients. Nous nous efforçons de développer des solutions à l’aide de la technologie, la manière propre à notre école, avec nos compétences et savoirs faire d’ingénieurs afin d’entretenir plus facilement le jardin et produire en grande quantité. En effet l’agriculture urbaine nécessite une main d’œuvre importante et impliquée afin d’offrir les meilleurs résultats. Afin de pallier à cela, les élèves de l’écoles mettent en place des projets innovants, partagés en open source</p>
                      </BoxParagraph>
                    </BoxContent>
                  </Box>
                </div>
              </section>
              <section className="section">
                <div className="content">
                  <h2 className="title is-family-secondary has-text-centered">Les projets en cours:</h2>
                </div>
                <div className="columns">
                  {/* TODO: Rajouter les liens (href) dans les balises <a> en fin de paragraphe vers les éléments cités
                      + Trouver une nouvelle image pour l'arroseur automatique*/}
                  <div className="column">
                    <Card>
                      <CardContent>
                        <CardTitle title="Un potager connecté :" /> 
                      </CardContent>
                      <CardImage src="/images/photos_potager/11.PNG" alt="capteur" />
                      <CardContent>
                        <CardButton />                 
                        <CardParagraph>
                          <p>La première étape du projet a été de mettre en place des systèmes de surveillance efficaces de l’écosystème du potager. Pour cela nous avons mis en place différents capteurs et une caméra afin de récolter un maximum de données environnementales pour analyser au mieux les conditions climatiques du potager.</p>
                          <p>Découvrez le système de capteur <a href="http://github.com/ECEBORG">ici</a>.</p>
                        </CardParagraph>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="column">
                    <Card>
                      <CardContent>
                        <CardTitle title="L'arrosage intelligent :" /> 
                      </CardContent>
                      <CardImage src="/images/photos_potager/12.jpg" alt="arroseur" /> 
                      <CardContent>
                        <CardButton />            
                        <CardParagraph>
                          <p>Avoir un potager sur toit pose des contraintes supplémentaires au niveau de l’arrosage. En effet la faible profondeur du sol et la conception du toit adaptée à une évacuation rapide des eaux de pluies fait que la terre retient très peu l’eau. Combiné à des vents importants dues à notre positionnement au cinquième étage et aux courants d’airs provenant des grandes tours de Beaugrenelle avoisinantes, la terre a une tendance à s‘assécher très vite. Pour pallier ce problème, il faut donc un arrosage intelligent capable de distribuer des petites quantité d’eau localisées tout au long de la journée plutôt qu’une grande quantité à un instant t. Pour ce faire nous avons créé un système de boitier contenant une électrovanne et un système de contôle à distance combiné à un réseau de tuyau et d’aspergeurs parcourant le potager. Cela nous permet non seulement de réaliser ces petits arrosages continus mais également de réaliser un arrosage différentiel en fonction du type de culture afin d’optimiser notre consommation d’eau.</p>
                          <p>Découvrez le système de capteur <a href="http://github.com/ECEBORG">ici</a>.</p>
                        </CardParagraph>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="column">
                    <Card>
                      <CardContent>
                        <CardTitle title="Le projet AWR² :" /> 
                      </CardContent>
                      <CardImage src="/images/photos_potager/13.jpg" alt="robot AWR2" /> 
                      <CardContent>
                        <CardButton />                  
                        <CardParagraph>
                          <p>Le projet AWR² ou Autonomous Weed Removal Roover est le premier robot agricole de l’association ECEBORG. Projet démarré en Décembre 2019, ce robot a pour but de parcourir notre potager, reconnaitre les plantes grâce à l’intelligence artificielle et désherber les mauvaises herbes de manière mécanique afin d’éviter l’usage de pesticides.  Même si l’aventure n’est encore qu’à ses débuts notre robot est déjà fonctionnel mécaniquement et rencontre un grand succès auprès des étudiants du campus. Nous souhaitons pérenniser l’ensemble des travaux produits en les partageant en open source pour permettre à un maximum de personnes de nous aider ainsi qu’une meilleur reprise du projet entre les différentes générations de l’ECE.</p>
                          <p>Découvrez le projet AWR <a href="http://github.com/ECEBORG/AWR-">ici</a>.</p>
                        </CardParagraph>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="column">
                    <Card>
                      <CardContent>
                        <CardTitle title="Farmbot :" /> 
                      </CardContent>
                      <CardImage src="/images/photos_potager/14.jpg" alt="farmbot" /> 
                      <CardContent>
                        <CardButton />                  
                        <CardParagraph>
                         <p>Farmbot est un projet open source de robot CNC pour le potager. Il s’agit d’un système de trois axes permettant de cultiver des carrés potagers allant jusqu’à 43,2m² de surface. C’est un des premiers projets de robotiques agricole et nous avons beaucoup d’admiration pour les concepteurs de farmbot. C’est pourquoi nous voulons construire nous-même notre propre farmbot pour tester en condition réel cette bête ! Pour instant nous sommes encore en recherche de financement pour ce projet.</p>
                          <p>Découvrez Farmbot <a href="http://farm.bot">ici</a>.</p>
                        </CardParagraph>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </section>
          </div>
        </section>
    </div>
    );
  }

export default Decouvrir;