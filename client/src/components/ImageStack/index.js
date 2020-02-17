import React from "react";
import tile1 from "../../assets/Images/tile1.JPG";
import "./style.css";

function ImageStack(props) {
    return (
        <>
            <a href="">
                <img className="stackImage" src={tile1} />
            </a>
            <a href="">
                <img className="stackImage" src={tile1} />
            </a>
            <a href="">
                <img className="stackImage" src={tile1} />
            </a>
            <a href="">
                <img className="stackImage" src={tile1} />
            </a>
            <a href="">
                <img className="stackImage" src={tile1} />
            </a>
            <a href="">
                <img className="stackImage" src={tile1} />
            </a>
        </>
    )
};

export default ImageStack;