import React from "react";

function CardImage({ src, alt }) {
    return (
        <div className="card-image">
            <figure className="image is-4by3">
                <img src={src} alt={alt}/>
            </figure>
        </div>
    );
}

function CardTitle({ title, subtitle }) {
    return (
        <div className="content">
            <p className="title is-4">{title}</p>
            <p className="subtitle is-6">{subtitle}</p>
        </div>
    );
}

function CardParagraph({ children }) {
    return (
        <div className="content justified-content">
            { children }
        </div>
    );
}

function CardContent({ children }) {
    return (
        <div className="card-content">
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

function Card({ children }) {
    return (
        <div className="card">
            {children}
        </div>
    );
}

export { Card, CardContent, CardImage, CardTitle, CardParagraph, CardIcon };
export default Card;