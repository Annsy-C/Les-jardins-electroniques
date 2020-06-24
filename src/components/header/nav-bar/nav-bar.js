import React from "react";

function NavBar ({ sticky }) {
  console.log({sticky});

  return(
    <div id="homepage_navbar">
      {/* TODO : fixer la navbar en haut de l'ecran et rajouter les href (ou autre) des éléments */}
      <nav className={(sticky ? "navbar" : "navbar is-fixed-top") + " is-primary"} role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item is-family-secondary">
            Accueil
          </a>

          <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item is-family-secondary">
              Observer
            </a>
            <a className="navbar-item is-family-secondary">
              Découvrir
            </a>
            <a className="navbar-item is-family-secondary">
              Historique
            </a>
            <a className="navbar-item is-family-secondary">
              Galerie
            </a>
            <a className="navbar-item is-family-secondary">
              Nous aider
            </a>
            <a className="navbar-item is-family-secondary">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </div>
    );
  }

export default NavBar;