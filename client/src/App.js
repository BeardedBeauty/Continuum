import React from 'react';
// import Logo from "./components/Logo";
import Title from "./components/Title";
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            titlesize: "mega",
            titlemargin: "continuumMarginLarge",
            capsC: "capsLargeC"
        }
    };

    componentDidMount = () => {
        window.addEventListener('scroll', this.scroll);
    };

    componentWillUnmount = () => {
        window.removeEventListener('scroll', this.scroll);
    };

    scroll = (event) => {
        let scroll = window.scrollY;
        scroll > 100 ? this.setState({
            titlesize: "scroll",
            titlemargin: "continuumMarginSmall",
            capsC: "capsSmallC"
        }) : this.setState({
            titlesize: "mega",
            titlemargin: "continuumMarginLarge",
            capsC: "capsLargeC"
        });
    };

    render() {
        return (
            <>
                {/* <Logo /> */}
                <Title
                    onscroll={this.scroll}
                    stylesize={this.state.titlesize}
                    cntuumHolder={this.state.titlemargin}
                    h1C={this.state.capsC} />
            </>
        )
    }
}

export default App;
