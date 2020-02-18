import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import fineart from "../../assets/Images/fart.tiff";
import leather from "../../assets/Images/lart.JPG";
import misc from "../../assets/Images/misc.png";
import murals from "../../assets/Images/mrls.png";
import signs from "../../assets/Images/signs.png";
import illust from "../../assets/Images/ills.png";
import "./style.css";

function ImageStack(props) {
    return (
        <>
            <Link to="/fineart">
                <img className="stackImage" src={fineart} />
            </Link>
            <a href="" onClick={q => q.preventDefault()}>
                <img className="stackImage" src={fineart} />
            </a>
            <a href="">
                <img className="stackImage" src={leather} />
            </a>
            <a href="">
                <img className="stackImage" src={murals} />
            </a>
            <a href="">
                <img className="stackImage" src={signs} />
            </a>
            <a href="">
                <img className="stackImage" src={illust} />
            </a>
            <a href="">
                <img className="stackImage" src={misc} />
            </a>
        </>
    )
};

export default ImageStack;