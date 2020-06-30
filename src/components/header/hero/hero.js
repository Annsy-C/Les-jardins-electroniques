import React from "react";

function Hero ({ reference }) {
    return(
    <div id="homepage_hero" ref={ reference }>
        <section className="hero is-primary">
            <div className="hero-body">
                <div className="container">
                    <div className="columns">
                        <div className="column is-2">
                            <figure className="image">
                                <img className="is-rounded" src="/images/logo3_jardin.jpeg" alt="logo des jardins"/>
                            </figure>
                        </div>
                        <div className="column is-10">
                            <div className="content">
                                <br />
                                <h1 className="title is-family-secondary">Les Jardins Electroniques</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div id="endHero"></div>
    </div>
    );
  }

export default Hero;