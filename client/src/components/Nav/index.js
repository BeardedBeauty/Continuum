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
        <>
            <div className="gallerytitle">
                <div className="center">
                    <div className="navLinkContainer">
                        {props.home && <div className="linkBox">
                            <Link to="/" className="navLink">G A L L E R I E S</Link>
                        </div>}
                        {!props.home && <div className="linkBox">
                            <p className="antinavLink" >G A L L E R I E S</p>
                        </div>}
                        <div className="linkBox">
                            <a href="mailto:marty_ochs@yahoo.com" className="navLink">C O N T A C T</a>
                        </div>
                        <div className="linkBox">
                            <span id="aboutClick" onClick={() => props.scroll()} className="navLink">A B O U T</span>
                        </div>
                        {/* <form>
                            <input type="text" id="search" name="search" placeholder="search"
                                onChange={f => props.input(f)}
                                onKeyPress={g => props.keyPress(g)}>
                            </input>
                        </form> */}
                    </div>
                </div>
            </div>
            {/* <div className="center">id="marginLinkLeft"
                <div className="iconContainer">
                    <a href="mailto:marty_ochs@yahoo.com">
                        <img src={insta} alt="insta" className="webconnect2" />
                    </a>
                    <a href="https://www.instagram.com/martys_arts_continuum/">
                        <img src={mail} alt="mail" className="webconnect2" />
                    </a>
                    <a href="https://www.instagram.com/martys_arts_continuum/">
                        <img src={link} alt="link" className="webconnect" />
                    </a>
                </div>
            </div> */}
        </>
    )
};

export default Nav;