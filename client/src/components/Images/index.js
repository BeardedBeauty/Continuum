import React from "react";
import "./style.css";

function Images(props) {
    return (
        <>
            <div className="dimmedbg"></div>
            <div className="centerholderbox">
                <div className="holderbox">
                    {props.children}
                </div>
            </div>
        </>
    )
};

export default Images;