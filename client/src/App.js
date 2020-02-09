import React from 'react';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from "react-scroll";
import './App.css';
import Title from "./components/Title";
import Scroll from "./components/Scroll";
import Gallery from './components/Gallery';

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
            scrollButtonVisible: "scrollButton"
        }
    };

    componentDidMount = () => {
        window.addEventListener('scroll', this.scroll);
    };

    componentWillUnmount = () => {
        window.removeEventListener('scroll', this.scroll);
    };

    scrollTo() {
        console.log(0)
        scroller.scrollTo("gallery", {
            duration: 500,
            delay: 0,
            smooth: 'easeInOutQuart'
        });
    };

    scroll = (event) => {
        let scrolling = window.scrollY;
        console.log(scrolling)
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
            <>
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
                <Element name="gallery" className="element" />
                <Gallery />
            </>
        )
    };
};

export default App;
