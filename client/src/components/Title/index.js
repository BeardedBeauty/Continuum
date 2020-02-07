import React from "react";
import background from "../../assets/Images/bg.JPG";
import "./style.css";
import "../../assets/Fonts/CELTG___.TTF";

function Title() {
    return (
        <>
            <div className="cover">
                <h2>MARTY'S ARTS</h2>
                <h1>C O N T I N U U M</h1>
            </div>
            <img src={background} alt="background" className="titleimg" />
        </>
    )
};

export default Title;