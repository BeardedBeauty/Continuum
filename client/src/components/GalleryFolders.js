import React, { useEffect } from "react";
import ImageStack from "./ImageStack";

function GalleryFolders() {
    // useEffect(() => {
    //     props.title("G a l l e r i e s");
    // }, []);

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