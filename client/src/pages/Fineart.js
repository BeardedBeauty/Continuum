import React from "react";
// import "./style.css";

function Images(props) {
    console.log(props.images)
    return (
        <>
            <p>{props.images}</p>
        </>
    )
};

export default Images;