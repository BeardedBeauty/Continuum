import React from "react";
import ImageStack from "./ImageStack";

function GalleryFolders() {
    return (
        <div className="gallery" >
            <div className="centeredGalleryStack">
                <div className="stacks">
                    <ImageStack />
                </div>
            </div>
        </div>
    )
};

export default GalleryFolders;