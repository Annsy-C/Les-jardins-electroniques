import React from 'react';
import Hero from './components/header/hero/hero';
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
  return (
      <>
        <Hero></Hero>
        <NavBar></NavBar>

        <Accueil></Accueil>
        <Observer></Observer>
        <Decouvrir></Decouvrir>
        <Historique></Historique>
        <Galerie></Galerie>
        <NousAider></NousAider>
        <Contact></Contact>

        <Footer></Footer>
      </>
  );
}

export default App;
