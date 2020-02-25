import React from 'react';
import { DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from "react-scroll";
import "./assets/Fonts/CELTG___.TTF";
import './App.css';
import Title from "./components/Title";
import Scroll from "./components/Scroll";
import Gallery from './components/Gallery';
import Footer from './components/Footer/Index';
import About from './components/About';

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
            modal: "displayNone",
            image: "https://i.ytimg.com/vi/tFZ8YBwOgoY/maxresdefault.jpg"
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
                    </div>
                </div>
                <About />
                <Footer />
            </>
        )
    };
};

export default App;