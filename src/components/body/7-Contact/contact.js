import React, { useState } from "react";
import InputEmail from "./input_email";

function Contact (props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [textArea, setTextArea] = useState("");

    return (
    <>
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-family-secondary">Contact</h1>
          </div>
        </div>
      </section> 
      <section className="section">
        <div className="container">
          <content className="content">
            <div className="columns">
              {/* TODO: informations à compléter */}
              <div className="column">
                <img src="/images/logo_ECEBORG.jpeg" alt="logo ECEBORG"/>
                <p> ECEBORG</p>
                <p>+ 33 6 60 91 27 18</p>
              </div>
              <div className="column">
                <img src="/images/logo_NOISE.jpeg" alt="logo NOISE"/>
                <p>NOISE ECE</p>
              </div>
            </div>
            <div className="has-background-info">
              <div className="columns">
                <div className="column">
                  <div className="field">
                    <label className="label">Nom</label>
                    <div className="control">
                      <input 
                          className="input" 
                          type="text" 
                          placeholder="Text input" 
                          value={name} 
                          onChange={(event) => setName(event.target.value)} 
                      />
                    </div>
                  </div>
                  <InputEmail email={email} setEmail={setEmail} />  
                </div>
                <div className="column">
                  <div className="field">
                    <label className="label">Sujet</label>
                    <div className="control">
                      <input 
                          className="input" 
                          type="text" 
                          placeholder="Text input" 
                          value={subject} 
                          onChange={(event) => setSubject(event.target.value)} 
                      />
                    </div>
                  </div>
                  <div class="field">
                    <label class="label">Message</label>
                    <div class="control">
                      <textarea class="textarea" placeholder="Textarea"></textarea>
                    </div>
                  </div>
                </div>
              </div>
              {/* TODO : rajouter la fonction OnClick correspondant à l'envoi en fonction du but recherché
              + voir avec Steff pour centrer les boutons (agrandir le pourtour? et faire la fonction cancel*/}
              <div className="field is-grouped">
                <div className="control">
                  <button className="button is-link">Envoyer</button>
                </div>
                <div className="control">
                  <button className="button is-link is-light">Annuler</button>
                </div>
              </div>
            </div>
          </content>
        </div>
      </section>
    </>
    );
  }

export default Contact;