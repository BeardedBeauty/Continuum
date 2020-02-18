import React from "react";
import "./style.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import GalleryFolders from "../GalleryFolders";
import Fineart from "./../../pages/Fineart.js";

class Gallery extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact component={GalleryFolders} />
                    <Route path="/fineart" component={Fineart} />
                </Switch>
            </Router>
        )
    }
};

export default Gallery;