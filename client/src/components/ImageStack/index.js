import React from "react";
import tile1 from "../../assets/Images/tile1.JPG";
import "./style.css";

function ImageStack(props) {
    return (
        <div className="centerStack">
            <img className="stackImage" src={tile1} />
        </div>
    )
};

export default ImageStack;