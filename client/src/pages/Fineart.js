import React, { useEffect } from "react";
import Image from "../components/Image.js";
// import "./style.css";

function Images(props) {
    useEffect(() => {
        props.title(props.medium);
    }, []);
    let imgs = [];
    for (let r = 0; r < props.images.length; r++) {
        imgs.push(<Image key={r} link={props.images[r]} />);
    }
    return (
        <>{imgs}</>
    )
};

export default Images;