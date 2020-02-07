import React from "react";
import background from "../../assets/Images/bg.JPG";
import "./style.css";
import "../../assets/Fonts/CELTG___.TTF";

function Title(props) {
    return (
        <>
            <div className={"cover " + props.stylesize} onScroll={props.onscroll}>
                <div className="holder2">
                    <h2>M A R T Y 'S</h2><h2>A R T S</h2>
                </div>
                <div className={"holder " + props.cntuumHolder}>
                    <h1 className={"capsC " + props.h1C}>C</h1>
                    <h1 className={"non" + props.h1U}>O N T I N U U M</h1>
                </div>
            </div>
            <img src={background} alt="background" className="titleimg" />
        </>
    )
};

export default Title;