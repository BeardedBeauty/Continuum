import React from 'react';
// import Logo from "./components/Logo";
import Title from "./components/Title";
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            titlesize: "mega"
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
        scroll > 0 ? this.setState({ titlesize: "scroll" }) : this.setState({ titlesize: "mega" });
    };

    render() {
        return (
            <>
                {/* <Logo /> */}
                <Title
                    onscroll={this.scroll}
                    stylesize={this.state.titlesize} />
            </>
        )
    }
}

export default App;
