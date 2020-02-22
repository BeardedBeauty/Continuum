import React from "react";
import "./style.css";
import insta from "../../assets/Images/mail.png";
import mail from "../../assets/Images/insta.png";

function Footer(props) {
    return (
        <div className="footerContainer">
            <br /><br />
            <h4>Based in Eden Prairie, Minnesota</h4>
            <br />
            <a href="mailto:marty_ochs@yahoo.com">
                <img src={insta} alt="insta" className="webconnect" />
            </a>
            <a href="https://www.instagram.com/martys_arts_continuum/">
                <img src={mail} alt="mail" className="webconnect" />
            </a>
            <h5>© John Ochs 2020</h5>
        </div>
    )
};

export default Footer;