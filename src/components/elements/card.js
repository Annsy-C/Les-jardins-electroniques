import React from "react";
import { CardContext, CardContextProvider } from "./cardContext";

function CardImage({ src, alt , hoverable=false }) {
    let classNames="card-image";
    if (hoverable) {
        classNames +=" hoverable";
    }
    return (
            <div className={classNames}>
                <figure className="image is-4by3">
                    <img src={src} alt={alt}/>
                </figure>
            </div>
    );
}

function CardTitle({ title, subtitle }) {
    return (
        <div className="content has-text-centered">
            <p className="title is-4">{title}</p>
            <p className="subtitle is-6">{subtitle}</p>
        </div>
    );
}

function CardParagraph({ children }) {

    const { isOpen } = React.useContext(CardContext);
    let classNames="content justified-content";

    if (!isOpen) {
        classNames += " is-hidden";
    }    

    return (        
        <div className={classNames}>
            { children }
        </div>
    );
}

function CardContent({ children }) {
    return (
        <div className="card-content collapsible-content">
            {children}
        </div>
    );
}

function CardIcon({ icon }) {
    return(
        <div className="content centered-content">
            <span className="icon is-large">
                    <i className={`fas ${icon} fa-7x is-flex`}></i>
            </span>
        </div>

    );
}

function CardButton() {
    const { isOpen, toggleIsOpen } = React.useContext(CardContext);
    let classNameButtonUp = isOpen ?  "button is-primary is-light is-small is-fullwidth is-rounded" : "is-hidden";
    let classNameButtonDown = isOpen ?  "is-hidden" : "button is-primary is-light is-small is-fullwidth is-rounded";

    return(
        <>
            <button onClick={toggleIsOpen} className={classNameButtonUp}>
                <div className="content centered-content">
                    <span className="icon">
                        <i className="fas fa-arrow-up is-flex"></i>
                    </span>
                </div>   
            </button>
            <button onClick={toggleIsOpen} className={classNameButtonDown}>
                <div className="content centered-content">
                    <span className="icon">
                        <i className="fas fa-arrow-down is-flex"></i>
                    </span>
                </div>   
            </button>
        </>
    )
}

function Card({ children , height=" heightMax"}) {
    return (
        <CardContextProvider>
            <div className={"card" + height}>
                {children}
            </div>
        </CardContextProvider>
    );
}

export { Card, CardContent, CardImage, CardTitle, CardParagraph, CardIcon, CardButton };
export default Card;