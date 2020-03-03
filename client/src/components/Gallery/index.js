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
import Modal from "../Modal";
import Nav from "../Nav";

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
            imageSearch: [],
            title: "G a l l e r i e s",
            modal: "displayNone",
            modalImage: "",
            scroll: props.scroll,
            galleryLink: true,
            imageTitle: null,
            desc: null,
            search: null
        }
    };

    componentWillMount() {
        api.getImages().then(res => {
            let e = res.data;
            for (let w = 0; w < e.length; w++) {
                if (e[w].arttype === "fineart") { this.state.images.fineart.push(e[w]); }
                else if (e[w].arttype === "leather") { this.state.images.leather.push(e[w]); }
                else if (e[w].arttype === "illustrations") { this.state.images.illust.push(e[w]); }
                else if (e[w].arttype === "murals") { this.state.images.murals.push(e[w]); }
                else if (e[w].arttype === "signs") { this.state.images.signs.push(e[w]); }
                else if (e[w].arttype === "misc") { this.state.images.misc.push(e[w]); }
            }
        }).catch(err => console.log(err));
    };

    title = o => this.setState({ title: o });

    displayModal = display => {
        display ? this.setState({
            modal: "displayBlock",
            modalImage: display.url,
            imageTitle: display.title,
            desc: display.desc
        }) : this.setState({
            modal: "displayNone",
            modalImage: null
        });
    }

    keyPress = s => s.key === 'Enter' ? this.send(s) : console.log(s.key + " not enter");

    input = d => this.setState({ search: d.target.value });

    send = h => {
        h.preventDefault();
        let x = [];
        for (let j in this.state.images) {
            if (this.state.images.hasOwnProperty(j)) {
                for (let k = 0; k < this.state.images[j].length; k++) {
                    const l = this.state.images[j][k].desc.toLowerCase();
                    const z = this.state.search.toLowerCase();
                    l.search(z) > -1 ? x.push(this.state.images[j][k]) : this.setState({ imageSearch: [] });
                }
            }
        }
        this.setState({ imageSearch: x });
    }

    render() {
        return (
            <>
                <Router>
                    <Nav
                        home={this.state.galleryLink}
                        scroll={this.state.scroll}
                        keyPress={this.keyPress}
                        input={this.input} />
                    <Switch>
                        <Route path="/" exact component={GalleryFolders} />
                        <Route path="/fineart"
                            render={props => <Fineart {...props}
                                images={this.state.images.fineart}
                                title={"F i n e   A r t"}
                                generate={this.displayModal}
                                disable={this.disable}
                            />}
                        />
                        <Route path="/leather"
                            render={props => <Fineart {...props}
                                images={this.state.images.leather}
                                title={"L e a t h e r"}
                                generate={this.displayModal}
                            />}
                        />
                        <Route path="/illustrations"
                            render={props => <Fineart {...props}
                                images={this.state.images.illust}
                                title={"I l l u s t r a t i o n s"}
                                generate={this.displayModal}
                            />}
                        />
                        <Route path="/murals"
                            render={props => <Fineart {...props}
                                images={this.state.images.murals}
                                title={"M u r a l s"}
                                generate={this.displayModal}
                            />}
                        />
                        <Route path="/signs"
                            render={props => <Fineart {...props}
                                images={this.state.images.signs}
                                title={"S i g n s"}
                                generate={this.displayModal}
                            />}
                        />
                        <Route path="/misc"
                            render={props => <Fineart {...props}
                                images={this.state.images.misc}
                                title={"M i s c e l l a n e o u s"}
                                generate={this.displayModal}
                            />}
                        />
                        <Route path="/search"
                            render={props => <Fineart {...props}
                                images={this.state.imageSearch}
                                title={"S e a r c h"}
                                generate={this.displayModal}
                            />}
                        />
                    </Switch>
                </Router>
                <Modal
                    modalDisplay={this.state.modal}
                    image={this.state.modalImage}
                    generate={this.displayModal}
                    title={this.state.imageTitle}
                    desc={this.state.desc}
                />
            </>
        )
    }
};

export default Gallery;