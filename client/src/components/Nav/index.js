import React from "react";
import "./style.css";
import insta from "../../assets/Images/mail.png";
import mail from "../../assets/Images/insta.png";
import link from "../../assets/Images/linkdin.png";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function Nav(props) {
    return (
        <div className="gallerytitle">
            <div className="center">
                <div className="navLinkContainer">
                    <Link to="/about" className="navLink">a b o u t</Link>
                    {props.home && <Link to="/" className="navLink">g a l l e r i e s</Link>}
                </div>
            </div>
            <div className="iconContainer">
                <a href="mailto:marty_ochs@yahoo.com">
                    <img src={insta} alt="insta" className="webconnect2" />
                </a>
                <a href="https://www.instagram.com/martys_arts_continuum/">
                    <img src={mail} alt="mail" className="webconnect2" />
                </a>
                {/* <a href="https://www.instagram.com/martys_arts_continuum/">
            <img src={link} alt="link" className="webconnect" />
        </a> */}
            </div>
        </div>
    )
};

export default Nav;