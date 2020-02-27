import React from "react";
import about from "../../assets/Images/about.JPG";
import "./style.css";

function About(props) {
    return (
        <>
            <div className="aboutCoverBio"></div>
            {props.children}
            <div className="cssSadness">
                <div className="center">
                    <div className="bio">Marty has 40 years of experience in fine art, graphic design, commercial art, indoor and outdoor murals, illustration, sign painting, and sculpture.  In addition, she collaborates with her husband to create artistic leather work and designs. She earned an AA degree from the University of Minnesota specializing in art and design and has a broad and deep experience with an eclectic blend of visual art forms. This versatile artist loves to use her artistic skills to serve and support her community.</div>
                </div>
                <img className="aboutimg" src={about} alt="about" />
            </div>
        </>
    )
};

export default About;