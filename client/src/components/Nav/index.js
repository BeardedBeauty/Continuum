import React from "react";
// import "./style.css";
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
            {props.home && <Link href="/">G A L L E R I E S</Link>}
            <a href="mailto:marty_ochs@yahoo.com">
                <img src={insta} alt="insta" className="webconnect" />
            </a>
            <a href="https://www.instagram.com/martys_arts_continuum/">
                <img src={mail} alt="mail" className="webconnect" />
            </a>
            {/* <a href="https://www.instagram.com/martys_arts_continuum/">
            <img src={link} alt="link" className="webconnect" />
        </a> */}
        </div>
    )
};

export default Nav;