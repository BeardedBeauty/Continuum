import React from "react";

function Image(props) {
    return (
        <img src={props.link} alt="galleryimage" className="img" onClick={() => props.generate(true)} />
    )
};

export default Image;