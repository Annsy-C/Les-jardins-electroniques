import React from "react";

function NavBar (props) {
    return(
    <React.Fragment id="homepage_navbar">
      {/* TODO : fixer la navbar en haut de l'ecran et rajouter les href (ou autre) des éléments */}
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="">
            Accueil
          </a>

          <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item">
              Observer
            </a>
            <a className="navbar-item">
              Découvrir
            </a>
            <a className="navbar-item">
              Historique
            </a>
            <a className="navbar-item">
              Galerie
            </a>
            <a className="navbar-item">
              Nous aider
            </a>
            <a className="navbar-item">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </React.Fragment>
    );
  }

export default NavBar;