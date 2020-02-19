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

function ImageStack() {
    return (
        <>
            <Link to="/fineart">
                <img className="stackImage" src={fineart} />
            </Link>
            <Link to="/leather">
                <img className="stackImage" src={leather} />
            </Link>
            <Link to="/murals">
                <img className="stackImage" src={murals} />
            </Link>
            <Link to="/signs">
                <img className="stackImage" src={signs} />
            </Link>
            <Link to="/illustrations">
                <img className="stackImage" src={illust} />
            </Link>
            <Link to="/misc">
                <img className="stackImage" src={misc} />
            </Link>
        </>
    )
};

export default ImageStack;