import React, { Component } from "react";
import { render } from "react-dom";

class App extends Component{
    render() {
        return(
            <div>Hello, this is a express + react boilerplate, find and edit me in src/App.jsx</div>
        )
    }
}

render(<App />, document.getElementById("app"));