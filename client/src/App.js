import React from 'react';
// import Logo from "./components/Logo";
import Title from "./components/Title";
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            q: null
        }
    }

    componentDidMount = () => {
        window.addEventListener('scroll', this.scroll);
    }

    componentWillUnmount = () => {
        window.removeEventListener('scroll', this.scroll);
    }

    scroll = (event) => {
        let scrollTop = event.srcElement.body.scrollTop,
            itemTranslate = Math.min(0, scrollTop / 3 - 60);

        this.setState({
            transform: itemTranslate
        })
    }

    render() {
        return (
            <>
                {/* <Logo /> */}
                <Title />
            </>
            // <div className="App">
            //   <header className="App-header">
            //     <img src={logo} className="App-logo" alt="logo" />
            //     <p>
            //       Edit <code>src/App.js</code> and save to reload.
            //     </p>
            //     <a
            //       className="App-link"
            //       href="https://reactjs.org"
            //       target="_blank"
            //       rel="noopener noreferrer"
            //     >
            //       Learn React
            //     </a>
            //   </header>
            // </div>
        )
    }
}

export default App;
