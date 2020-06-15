import React from "react";

function Hero (props) {
    return(
    <section className="hero is-primary">
        <div className="hero-body">
            <div className="container">
                <div className="columns">
                    <div className="column is-2">
                        {/* TODO: image à remplacer par le logo des Jardins Electroniques */}
                        <img className="is-rounded" src="" alt="logo des jardins"/>
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
    );
  }

export default Hero;