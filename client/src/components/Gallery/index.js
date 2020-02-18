import React from "react";
import "./style.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import GalleryFolders from "../GalleryFolders";

class Gallery extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact component={GalleryFolders} />
                    {/* <Route path="/fineart" component={} /> */}
                </Switch>
            </Router>
        )
    }
};

export default Gallery;