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
            <div className="textCenter">
                <Link to="/fineart">
                    <img className="stackImage" src={fineart} />
                </Link>
                <p className="desc">Fine Art</p>
            </div>
            <div className="textCenter">
                <Link to="/leather">
                    <img className="stackImage" src={leather} />
                </Link>
                <p className="desc">Leather</p>
            </div>
            <div className="textCenter">
                <Link to="/murals">
                    <img className="stackImage" src={murals} />
                </Link>
                <p className="desc">Murals</p>
            </div>
            <div className="textCenter">
                <Link to="/signs">
                    <img className="stackImage" src={signs} />
                </Link>
                <p className="desc">Signs</p>
            </div>
            <div className="textCenter">
                <Link to="/illustrations">
                    <img className="stackImage" src={illust} />
                </Link>
                <p className="desc">Illustrations</p>
            </div>
            <div className="textCenter">
                <Link to="/misc">
                    <img className="stackImage" src={misc} />
                </Link>
                <p className="desc">Miscellaneous</p>
            </div>
        </>
    )
};

export default ImageStack;