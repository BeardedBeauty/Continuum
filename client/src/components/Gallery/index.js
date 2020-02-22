import React from "react";
import "./style.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import api from "../../utils/API";
import GalleryFolders from "../GalleryFolders";
import Fineart from "./../../pages/Fineart.js";

class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: {
                fineart: [],
                leather: [],
                illust: [],
                misc: [],
                murals: [],
                signs: []
            },
            title: "G a l l e r i e s"
        }
    };

    componentWillMount() {
        api.getImages().then(res => {
            let e = res.data;
            for (let w = 0; w < e.length; w++) {
                if (e[w].arttype === "fineart") {
                    this.state.images.fineart.push(e[w].url);
                }
                else if (e[w].arttype === "leather") {
                    this.state.images.leather.push(e[w].url);
                }
                else if (e[w].arttype === "illustrations") {
                    this.state.images.illust.push(e[w].url);
                }
                else if (e[w].arttype === "murals") {
                    this.state.images.murals.push(e[w].url);
                }
                else if (e[w].arttype === "signs") {
                    this.state.images.signs.push(e[w].url);
                }
                else if (e[w].arttype === "misc") {
                    this.state.images.misc.push(e[w].url);
                }
            }
        }).catch(err => console.log(err));
    };

    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact component={GalleryFolders} />
                    <Route path="/fineart"
                        render={props => <Fineart {...props}
                            images={this.state.images.fineart}
                        />}
                    />
                    <Route path="/leather"
                        render={props => <Fineart {...props}
                            images={this.state.images.leather}
                        />}
                    />
                    <Route path="/illustrations"
                        render={props => <Fineart {...props}
                            images={this.state.images.illust}
                        />}
                    />
                    <Route path="/murals"
                        render={props => <Fineart {...props}
                            images={this.state.images.murals}
                        />}
                    />
                    <Route path="/signs"
                        render={props => <Fineart {...props}
                            images={this.state.images.signs}
                        />}
                    />
                    <Route path="/misc"
                        render={props => <Fineart {...props}
                            images={this.state.images.misc}
                        />}
                    />
                </Switch>
            </Router>
        )
    }
};

export default Gallery;