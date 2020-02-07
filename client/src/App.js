import React from 'react';
// import Logo from "./components/Logo";
import Title from "./components/Title";
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            titlesize: "mega",
            titlemargin: "continuumMarginLarge"
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
            titlemargin: "continuumMarginSmall"
        }) : this.setState({
            titlesize: "mega",
            titlemargin: "continuumMarginLarge"
        });
    };

    render() {
        return (
            <>
                {/* <Logo /> */}
                <Title
                    onscroll={this.scroll}
                    stylesize={this.state.titlesize}
                    cntuumHolder={this.state.titlemargin} />
            </>
        )
    }
}

export default App;
