import React, {useState, useEffect} from "react";

function Accueil ({ reference }) {
    const backgroundImage=["/images/accueil/1.jpg",
                              "/images/accueil/2.jpg",
                              "/images/accueil/3.jpg",
                              "/images/accueil/4.jpg"];
    const elementId = 0;

        const ChangingImageBox = ({ fluidImages = [], takenTime = 6500 }) => {
        const [image, setImage] = useState(fluidImages[0]);
        const [time, setTime] = React.useState(0);
        useEffect(() => {
          const timer = window.setInterval(() => {
            setTime(prevTime => prevTime + 1);
          }, takenTime);
          return () => {
            window.clearInterval(timer);
          };
        }, [takenTime]);
        useEffect(() => {
          setImage(fluidImages[time % fluidImages.length]);
        }, [fluidImages, time]);
        return <img src="fluidImage={image.childImageSharp.fluid}" alt="carrousel"/>;
      };

    
    return(
    <div ref={reference}>
        <section 
            className="section" 
            style={{
                background:`url(${backgroundImage[elementId]})`, 
                backgroundSize: 'cover',
                minHeight: '700px'
        }}>
            <div className="content">
                <div className="columns">
                    <div className="column">
                        <figure className="image is 4by1">
                            <img src="/images/logos/logo3_jardin.jpeg" alt="logo jardin" className="is-rounded"/>
                        </figure>
                    </div>
                    <div className="column">
                        <h1 className="title is-family-secondary">Bienvenue au potager du campus Eiffel</h1>
                    </div>
                </div>
                <div className="columns">
                    <div className="column is-2">
                        <figure className="image is-128x128">
                            <img src="/images/logos/logo_ECEBORG.jpeg" alt="logo ECEBORG" className="is-rounded"/>
                        </figure>
                    </div>
                    <div className="column is-2">
                        <figure className="image is-128x128">
                            <img src="/images/logos/logo_ECE.jpg" alt="logo ECE" className="is-rounded"/>
                        </figure>
                    </div>
                    <div className="column is-2">
                        <figure className="image is-128x128">
                            <img src="/images/logos/logo_NOISE.jpeg" alt="logo NOISE" className="is-rounded"/>
                        </figure>
                    </div>
                </div>

            </div>
        </section>
    </div>
    );
  }

export default Accueil;