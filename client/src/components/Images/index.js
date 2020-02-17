import React from "react";
import "./style.css";

function Images(props) {
    return (
        <div className="holderbox">
            {props.children}
        </div>
    )
};

export default Images;