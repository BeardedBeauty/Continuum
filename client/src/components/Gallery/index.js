import React from "react";
import "./style.css";

function Gallery(props) {
    return (
        <div className="gallery">
            <div className="centeredGalleryStack">
                <div className="stacks">
                    {props.children}
                </div>
            </div>
        </div>
    )
};

export default Gallery;