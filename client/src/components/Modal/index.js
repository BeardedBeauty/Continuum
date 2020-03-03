import React from "react";
import "./style.css";

function Modal(props) {
    return (
        <div className={`modal ${props.modalDisplay}`} >
            <span className="close" onClick={() => props.generate(false)}>&times;</span>
            <img className="modalcon" id="imageModal" src={props.image} />
            <div id="caption">
                <h3>{props.title}</h3>
                <h4>{props.desc}</h4>
            </div>
        </div>
    )
};

export default Modal;