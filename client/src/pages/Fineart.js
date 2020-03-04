import React from "react";

function ArtPage(props) {
    let imgs = [];
    for (let r = 0; r < props.images.length; r++) {
        imgs.push(
            <div className="imgBox">
                <img
                    key={props.images[r]._id}
                    src={props.images[r].url}
                    alt={props.images[r]._id}
                    className="img" onClick={() => props.generate(props.images[r])}
                />
            </div>
        );
    }
    return (
        <>
            <div className="titleGallery">
                <p className="titleText">{props.title}</p>
            </div>
            {props.search && <div id="searchContainer">
                <div className="block">
                    <form className="formSearch">
                        <input type="text" id="search" name="search" placeholder="find it here"
                            onChange={f => props.input(f)}
                            onKeyPress={g => props.keyPress(g)}>
                        </input>
                    </form>
                </div>
            </div>}
            <div className="center">
                <div className="imageContianer">{imgs}</div>
            </div>
        </>
    )
};

export default ArtPage;