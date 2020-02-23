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
            title: "G a l l e r i e s",
            modal: "displayNone"
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

    title = props => this.setState({ title: props });

    displayModal = display => display ? this.setState({ modal: "displayBlock" }) : this.setState({ modal: "displayNone" });

    render() {
        return (
            <>
                <div className="gallerytitle">
                    <h2 className="bigG">{this.state.title}</h2>
                </div>
                <Router>
                    <Switch>
                        <Route path="/" exact component={GalleryFolders} />
                        <Route path="/fineart"
                            render={props => <Fineart {...props}
                                images={this.state.images.fineart}
                                title={this.title}
                                medium={"F i n e   A r t"}
                                generate={this.displayModal}
                            />}
                        />
                        <Route path="/leather"
                            render={props => <Fineart {...props}
                                images={this.state.images.leather}
                                title={this.title}
                                medium={"L e a t h e r"}
                            />}
                        />
                        <Route path="/illustrations"
                            render={props => <Fineart {...props}
                                images={this.state.images.illust}
                                title={this.title}
                                medium={"I l l u s t r a t i o n s"}
                            />}
                        />
                        <Route path="/murals"
                            render={props => <Fineart {...props}
                                images={this.state.images.murals}
                                title={this.title}
                                medium={"M u r a l s"}
                            />}
                        />
                        <Route path="/signs"
                            render={props => <Fineart {...props}
                                images={this.state.images.signs}
                                title={this.title}
                                medium={"S i g n s"}
                            />}
                        />
                        <Route path="/misc"
                            render={props => <Fineart {...props}
                                images={this.state.images.misc}
                                title={this.title}
                                medium={"M i s c e l l a n e o u s"}
                            />}
                        />
                    </Switch>
                </Router>
            </>
        )
    }
};

export default Gallery;