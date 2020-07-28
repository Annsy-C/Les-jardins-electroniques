import React from "react";

function Box({ children }) {
    return (
        <div className="box">
            <div className="columns">
                {children}
            </div>
        </div>
    );
}

function BoxContent({ children }) {
    return(
        <div className="column">
            {children}
        </div>
    );
}

function BoxTitle({ title }) {
    return(
        <div className="content">
            <p className="title is-4">{title}</p>
        </div>
    );
}

function BoxImage({ size = "", src, alt }) {
    return (
        <figure className={"image " + size}>
            <img src={src} alt={alt} />
        </figure>
    );
}

function BoxIcon({ icon }) {
    return(
        <div className="content centered-content">
            <span className="icon">
                    <i className={`fas ${icon} fa-3x is-flex`}></i>
            </span>
        </div>

    );
}

function BoxParagraph({ children }) {
    return(
        <div className="content justified-content">
            {children}
        </div>
    );
}

export { Box, BoxContent, BoxTitle, BoxImage, BoxIcon, BoxParagraph, };
export default Box;