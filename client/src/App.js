import React from 'react';
import { DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from "react-scroll";
import './App.css';
import about from "./assets/Images/about.JPG"
import Title from "./components/Title";
import Scroll from "./components/Scroll";
import Gallery from './components/Gallery';
import "./assets/Fonts/CELTG___.TTF";
import Footer from './components/Footer/Index';

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
        }
    };

    componentDidMount = () => window.addEventListener('scroll', this.scroll);

    componentWillUnmount = () => window.removeEventListener('scroll', this.scroll);

    scrollTo() {
        scroller.scrollTo("gallery", {
            duration: 500,
            delay: 0,
            smooth: 'easeInOutQuart'
        });
    };

    scroll = u => {
        let scrolling = window.scrollY;
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

        scrolling > 500 ? this.setState({ scrollButtonVisible: "hide" })
            : this.setState({ scrollButtonVisible: "scrollButton" });
    };

    scrollButton = y => y ? y.preventDefault() : console.log(y);

    render() {
        return (
            <>
                <div className="pusher">
                    <div className="wrapper">
                        {/* <Logo /> */}
                        <span className="test1" to="scrollto" onClick={() => this.scrollTo()} >
                            <Scroll
                                scrollDown={this.scrollButton}
                                hide={this.state.scrollButtonVisible}>
                            </Scroll>
                        </span>
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
                        <Gallery />
                        <br />
                        <div className="whatThe"></div>
                        {/* <div className="cssSadness">
                            <img className="aboutimg" src={about} alt="about" />
                            <div className="center" >
                                <div className="bio">Marty has 40 years of experience in fine art, graphic design, commercial art, indoor and outdoor murals, illustration, sign painting, and sculpture.  In addition, she collaborates with her husband to create artistic leather work and designs. She earned an AA degree from the University of Minnesota specializing in art and design and has a broad and deep experience with an eclectic blend of visual art forms. This versatile artist loves to use her artistic skills to serve and support her community.</div>
                            </div>
                        </div> */}
                    </div>
                </div>
                <Footer />
            </>
        )
    };
};

export default App;