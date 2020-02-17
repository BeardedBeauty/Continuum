import React from "react";
import tile1 from "../../assets/Images/tile1.JPG";
import "./style.css";

function ImageStack(props) {
    return (
        <>
            <img className="stackImage" src={tile1} />
            <img className="stackImage" src={tile1} />
            <img className="stackImage" src={tile1} />
            <img className="stackImage" src={tile1} />
            <img className="stackImage" src={tile1} />

            {/* <div className="stackLeft">
                <img className="stackImage" src={tile1} />
            </div>
            <div className="stackLeft">
                <img className="stackImage" src={tile1} />
            </div>
            <div className="stackLeft">
                <img className="stackImage" src={tile1} />
            </div>
            <div className="stackLeft">
                <img className="stackImage" src={tile1} />
            </div>
            <div className="stackLeft">
                <img className="stackImage" src={tile1} />
            </div> */}
        </>
    )
};

export default ImageStack;