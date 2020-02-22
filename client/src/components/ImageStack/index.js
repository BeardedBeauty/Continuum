import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import fineart from "../../assets/Images/fineart.png";
import leather from "../../assets/Images/leather.png";
import misc from "../../assets/Images/misc.png";
import murals from "../../assets/Images/murals.png";
import signs from "../../assets/Images/signs.png";
import illust from "../../assets/Images/ills.png";
import "./style.css";

function ImageStack() {
    return (
        <>
            <Link to="/fineart">
                <img className="stackImage" src={fineart} />
                <div className="desc"></div>
            </Link>
            <Link to="/leather">
                <img className="stackImage" src={leather} />
                <div className="desc"></div>
            </Link>
            <Link to="/murals">
                <img className="stackImage" src={murals} />
                <div className="desc"></div>
            </Link>
            <Link to="/signs">
                <img className="stackImage" src={signs} />
                <div className="desc"></div>
            </Link>
            <Link to="/illustrations">
                <img className="stackImage" src={illust} />
                <div className="desc"></div>
            </Link>
            <Link to="/misc">
                <img className="stackImage" src={misc} />
                <div className="desc"></div>
            </Link>
        </>
    )
};

export default ImageStack;