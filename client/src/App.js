import React from 'react';
// import Logo from "./components/Logo";
import Title from "./components/Title";
import Scroll from "./components/Scroll";
import './App.css';
import Gallery from './components/Gallery';
// import Gallery from './components/Gallery';

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
            scrollTop: null
        }
    };

    componentDidMount = () => {
        window.addEventListener('scroll', this.scroll);
    };

    componentWillUnmount = () => {
        window.removeEventListener('scroll', this.scroll);
    };

    scroll = (event) => {
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

        scrolling > 600 ? this.setState({ scrollButtonVisible: "hide" })
            : this.setState({ scrollButtonVisible: "scrollButton" });
    };

    scrollButton = (event) => {
        event ? event.preventDefault() : console.log(event);
        // window.scrollTo(0, this.scrollRef.current.offsetTop);
    };

    render() {
        return (
            <>
                {/* <Logo /> */}
                <Scroll
                    scrollDown={this.scrollButton}
                    hide={this.state.scrollButtonVisible} />
                <Title
                    onscroll={this.scroll}
                    stylesize={this.state.titlesize}
                    h1C={this.state.capsC}
                    h1U={this.state.capsU}
                    cntuumHolder={this.state.holderContinuum}
                    continuumPlacer={this.state.continuumPlacer}
                    artsHolder={this.state.artsHolder}
                    holder2placer={this.state.holder2placer} />
                <Gallery />
                <div ref={this.scrollRef}></div>
            </>
        )
    };
};

export default App;
