import React from 'react';
import { DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from "react-scroll";
import './App.css';
import api from "./utils/API";
import about from "./assets/Images/about.JPG"
import Title from "./components/Title";
import Scroll from "./components/Scroll";
import Gallery from './components/Gallery';
import ImageStack from './components/ImageStack';
import "./assets/Fonts/CELTG___.TTF";
import Images from './components/Images';
import Image from "./components/Image";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.scrollRef = React.createRef();
        this.state = {
            titlesize: "mega",
            titlemargin: "continuumMarginLarge",
            capsC: "capsLargeC",
            capsU: "capsLargeU",
            holderContinuum: "holder1Large",
            continuumPlacer: "continuumhalf",
            artsHolder: "martysartsCenter",
            holder2placer: "holder2PlacerCenter",
            scrollButtonVisible: "scrollButton",
            images: [],
            gallerytitle: "G a l l e r y",
            imagedisplay: ""
        }
    };

    componentDidMount = () => {
        window.addEventListener('scroll', this.scroll);
        // this.pull();
    };

    componentWillUnmount = () => {
        window.removeEventListener('scroll', this.scroll);
    };

    pull = () => {
        api.getImages().then(res => {
            console.log(res.data);
            this.setState({ images: res.data });
        }).catch(err => console.log(err));
    };

    scrollTo() {
        console.log(0)
        scroller.scrollTo("gallery", {
            duration: 500,
            delay: 0,
            smooth: 'easeInOutQuart'
        });
    };

    scroll = event => {
        let scrolling = window.scrollY;
        // console.log(scrolling);
        scrolling > 150 ? this.setState({
            titlesize: "scroll",
            titlemargin: "continuumMarginSmall",
            capsC: "capsSmallC",
            capsU: "capsSmallU",
            holderContinuum: "holder1Small",
            continuumPlacer: "continuumright",
            artsHolder: "martysartsHalf",
            holder2placer: "holder2PlacerLeft"
        }) : this.setState({
            titlesize: "mega",
            titlemargin: "continuumMarginLarge",
            capsC: "capsLargeC",
            capsU: "capsLargeU",
            holderContinuum: "holder1Large",
            continuumPlacer: "continuumhalf",
            artsHolder: "martysartsCenter",
            holder2placer: "holder2PlacerCenter"
        });

        scrolling > 600 ? this.setState({ scrollButtonVisible: "hide" })
            : this.setState({ scrollButtonVisible: "scrollButton" });
    };

    scrollButton = (event) => {
        event ? event.preventDefault() : console.log(event);
    };

    render() {
        return (
            <div className="inheritScroll">
                {/* <Logo /> */}
                <span className="test1" to="scrollto" onClick={() => this.scrollTo()} >
                    <Scroll
                        scrollDown={this.scrollButton}
                        hide={this.state.scrollButtonVisible}>
                    </Scroll>
                </span>
                {/* <Images display={this.state.imagedisplay}>
                    {this.state.images.map(image =>
                        <Image
                            link={image.url}
                            key={image._id}
                        />
                    )}
                </Images> */}
                <Title
                    onscroll={this.scroll}
                    stylesize={this.state.titlesize}
                    h1C={this.state.capsC}
                    h1U={this.state.capsU}
                    cntuumHolder={this.state.holderContinuum}
                    continuumPlacer={this.state.continuumPlacer}
                    artsHolder={this.state.artsHolder}
                    holder2placer={this.state.holder2placer} />
                <Element name="gallery" className="element elementmargin" />
                <div className="gallerytitle">
                    <h2 className="bigG">{this.state.gallerytitle}</h2>
                </div>
                <Gallery />
                <br />
                <img className="aboutimg" src={about} alt="about" />
            </div>
        )
    };
};

export default App;