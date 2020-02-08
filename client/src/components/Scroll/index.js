import React from "react";
import "./style.css";

function Scroll(props) {
    return (
        <div id="scrollCenter">
            <a href="" onClick={props.scrollDown}>
                <div id="button" className={props.hide}>
                    <div className="arrow">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </a>
        </div>
    )
};

export default Scroll;