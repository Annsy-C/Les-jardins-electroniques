import React from "react";

function Hero (props) {
    return(
    <React.Fragment id="homepage_hero">
        <section className="hero is-primary">
            <div className="hero-body">
                <div className="container">
                    <div className="columns">
                        <div className="column is-2">
                            <img className="is-rounded" src="/images/logo2_jardin.jpeg" alt="logo des jardins"/>
                        </div>
                        <div class="column is-10">
                            <div className="content">
                                <h1 className="title is-family-secondary">Les Jardins Electroniques</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </React.Fragment>
    );
  }

export default Hero;