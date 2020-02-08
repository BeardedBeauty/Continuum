import React from "react";
import "./style.css";

// const scrollToRef = (ref) => window.scrollTo(1464, ref.current.offsetTop);

function Scroll(props) {
    // const myRef = useRef(null);
    // const executeScroll = () => scrollToRef(myRef);
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