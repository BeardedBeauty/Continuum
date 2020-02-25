import React, { useEffect } from "react";

function ArtPage(props) {
    useEffect(() => {
        props.title(props.medium);
    }, []);
    let imgs = [];
    for (let r = 0; r < props.images.length; r++) {
        imgs.push(<img key={r} src={props.images[r]} alt="galleryimage" className="img" onClick={() => props.generate(props.images[r])} />);
    }
    return (
        <div className="imageContainer">{imgs}</div>
    )
};

export default ArtPage;