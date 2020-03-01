import React, { useEffect } from "react";

function ArtPage(props) {
    let imgs = [];
    for (let r = 0; r < props.images.length; r++) {
        imgs.push(
            <div className="imgBox">
                <img key={r} src={props.images[r]} alt="galleryimage" className="img" onClick={() => props.generate(props.images[r])} />
            </div>
        );
    }
    return (
        <>
            <div className="titleGallery">
                <p className="titleText">{props.title}</p>
            </div>
            <div className="center">
                <div className="imageContianer">{imgs}</div>
            </div>
        </>
    )
};

export default ArtPage;