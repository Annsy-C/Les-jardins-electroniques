import React, { useState } from "react";

const scrollToRef = (ref, sticky) => window.scrollTo({
  top: ref.current.offsetTop - 50,
  behavior: 'smooth'
});

function NavBar ({ sticky, divRefs }) {
  const { accueilRef, observerRef, decouvrirRef, historiqueRef, galerieRef, nousAiderRef, contactRef } = divRefs;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const openMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }
  return(
    <div id="homepage_navbar">
      <nav className={(sticky ? "navbar" : "navbar is-fixed-top") + " is-primary"} role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item is-family-secondary is-size-4" onClick={() => scrollToRef(accueilRef, sticky)}>
            Accueil
          </a>
          <a 
            role="button" 
            className={"navbar-burger burger" + (isMenuOpen ? " is-active" : "")}
            aria-label="menu" 
            aria-expanded="false" 
            data-target="navbarBasicExample"
            onClick={openMenu}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className={"navbar-menu" + (isMenuOpen ? " is-active" : "")}>
          <div className="navbar-start">
            <a className="navbar-item is-family-secondary is-size-4" onClick={() => scrollToRef(observerRef, sticky)}>
              Observer
            </a>
            <a className="navbar-item is-family-secondary is-size-4" onClick={() => scrollToRef(decouvrirRef, sticky)}>
              Découvrir
            </a>
            <a className="navbar-item is-family-secondary is-size-4" onClick={() => scrollToRef(historiqueRef, sticky)}>
              Historique
            </a>
            <a className="navbar-item is-family-secondary is-size-4" onClick={() => scrollToRef(galerieRef, sticky)}>
              Galerie
            </a>
            <a className="navbar-item is-family-secondary is-size-4" onClick={() => scrollToRef(nousAiderRef, sticky)}>
              Nous aider
            </a>
            <a className="navbar-item is-family-secondary is-size-4" onClick={() => scrollToRef(contactRef, sticky)}>
              Contact
            </a>
          </div>
        </div>
      </nav>
    </div>
    );
  }

export default NavBar;