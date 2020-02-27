import React from "react";
import "./style.css";
import insta from "../../assets/Images/mail.png";
import mail from "../../assets/Images/insta.png";
import link from "../../assets/Images/linkdin.png";

function Footer() {
    return (
        <div className="footerContainer">
            <br />
            <p id="h4footer">M A R T Y 'S • A R T S • C O N T I N U U M</p>
            <h4>Based in Eden Prairie, Minnesota</h4>
            <a href="mailto:marty_ochs@yahoo.com">
                <img src={insta} alt="insta" className="webconnect" />
            </a>
            <a href="https://www.instagram.com/martys_arts_continuum/">
                <img src={mail} alt="mail" className="webconnect" />
            </a>
            {/* <a href="https://www.instagram.com/martys_arts_continuum/">
                <img src={link} alt="link" className="webconnect" />
            </a> */}
            <h6>© John Ochs 2020</h6>
        </div>
    )
};

export default Footer;