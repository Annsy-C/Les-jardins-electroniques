import React, { useRef } from 'react';
import NavBar from './components/header/nav-bar/nav-bar';
import Accueil from './components/body/1-Accueil/accueil';
import Observer from './components/body/2-Observer/observer';
import Decouvrir from './components/body/3-Decouvrir/decouvrir';
import Historique from './components/body/4-Historique/historique';
import Galerie from './components/body/5-Galerie/galerie';
import NousAider from './components/body/6-Nous_aider/nous_aider';
import Contact from './components/body/7-Contact/contact';
import Footer from './components/footer/footer'

function App() {
  const accueilRef = useRef(null);
  const observerRef = useRef(null);
  const decouvrirRef = useRef(null);
  const historiqueRef = useRef(null);
  const galerieRef = useRef(null);
  const nousAiderRef = useRef(null);
  const contactRef = useRef(null);
  return (
      <>
        <NavBar divRefs={{accueilRef, observerRef, decouvrirRef, historiqueRef, galerieRef, nousAiderRef, contactRef}} ></NavBar>

        <Accueil reference={accueilRef}></Accueil>
        <Observer reference={observerRef}></Observer>
        <Decouvrir reference={decouvrirRef}></Decouvrir>
        <Historique reference={historiqueRef}></Historique>
        <Galerie reference={galerieRef}></Galerie>
        <NousAider reference={nousAiderRef}></NousAider>
        <Contact reference={contactRef}></Contact>

        <Footer></Footer>
      </>
  );
}

export default App;
