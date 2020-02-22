import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import background from "../../assets/Images/horseII.png";
import "./style.css";
import "../../assets/Fonts/CELTG___.TTF";

function Title(props) {
    return (
        <>
            <div className={"cover " + props.stylesize} onScroll={props.onscroll}>
                <div className={"dipcenter"}>
                    <div className={"centerwords"}>
                        <div className={props.artsHolder}>
                            <div className={"holder2 " + props.holder2placer}>
                                <h2>M A R T Y 'S</h2><h2 id="arts">A R T S</h2>
                            </div>
                        </div>
                        <div className={props.continuumPlacer}>
                            <div className={"holder " + props.cntuumHolder}>
                                <h1 className={"capsC " + props.h1C}>C</h1>
                                <h1 className={"non " + props.h1U}>O N T I N U U M</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img src={background} alt="background" className="titleimg" />
        </>
    )
};

export default Title;