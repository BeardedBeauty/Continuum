import React from "react";
import Image from "../components/Image.js";
// import "./style.css";

function Images(props) {
    console.log(props.images);
    let imgs = [];
    for (let r = 0; r < props.images.length; r++) {
        imgs.push(<Image key={r} link={props.images[r]} />);
    }
    return (
        <>{imgs}</>
    )
};

export default Images;