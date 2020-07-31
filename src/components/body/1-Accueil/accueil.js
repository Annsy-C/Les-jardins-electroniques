import React, {useState, useEffect} from "react";

function Accueil ({ reference }) {
    const backgroundImages = [ 
        "/images/accueil/1.jpg",
        "/images/accueil/2.jpg",
        "/images/accueil/3.jpg",
        "/images/accueil/4.jpg"
    ];
    const [image, setImage] = useState(backgroundImages[0]);
    const [timerCount, setTimerCount] = useState(0);
    const takenTime = 6000;

    useEffect(() => {
        const timer = window.setInterval(() => {
          setTimerCount(prevTimerCount => prevTimerCount + 1); 
        }, takenTime);
  
        return () => {
          window.clearInterval(timer);
        };
      }, []);
  
      useEffect(() => {
        setImage(backgroundImages[timerCount % backgroundImages.length]);
      }, [backgroundImages, timerCount]);

    
    return(
    <div ref={reference}>
        <div id="preload">
            {backgroundImages.map((image) => <img src={image} alt="preloaded"></img>)}
        </div>
        <section
            className="section accueil-section" 
            style={{ backgroundImage:`url(${image})`}}
        >
            <div className="content">
                <div className="columns">
                    <div className="column">
                    </div>
                    <div className="column">
                        <h1 className="title is-family-secondary">Bienvenue au potager du campus Eiffel</h1>
                        <figure className="image" style={{ marginTop:'8em'}}>
                            <img src="/images/logos/logo3_jardin.jpeg" 
                                 alt="logo jardin" 
                                 className="is-rounded"
                                 style={{width:'50%'}}
                            />
                        </figure>
                        <div className="columns">
                            <div className="column">
                                <figure className="image is-128x128">
                                    <img src="/images/logos/logo_ECEBORG.jpeg" alt="logo ECEBORG" className="is-rounded"/>
                                </figure>
                            </div>
                            <div className="column">
                                <figure className="image is-128x128">
                                    <img src="/images/logos/logo_ECE.jpg" alt="logo ECE" className="is-rounded"/>
                                </figure>
                            </div>
                            <div className="column">
                                <figure className="image is-128x128">
                                    <img src="/images/logos/logo_NOISE.jpeg" alt="logo NOISE" className="is-rounded"/>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    );
  }

export default Accueil;