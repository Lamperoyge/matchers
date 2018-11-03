import React, { Component } from "react";
import { BrowserRouter} from 'react-router-dom';
import { render } from "react-dom";
import {Provider} from './Context';
import Main from './Main';
import styles from './generic.css';

class App extends Component{
    constructor(props) {
    	super(props);
    	this.state = {
    		loggedIn: false,
    		userType: '',
    		userEmail: '',
            firstTime: false,
            setUserType: null,
            logInHandle: null,
            makeSettings: null,
    	}
    	this.logInHandle = this.logInHandle.bind(this);
        this.setUserType = this.setUserType.bind(this);
        this.makeSettings = this.makeSettings.bind(this);
    }

    componentDidMount() {
        if (this.state.setUserType === null) {
            this.setState({
                setUserType: this.setUserType,
                logInHandle: this.logInHandle,
                makeSettings: this.makeSettings,
            });
        }
    }

    logInHandle(email, password) {
        console.log('sal');
        console.log(`/login/${email}/${password}`);
        fetch(`/login/${email}/${password}`, {
            method: 'GET',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "Cache-Control": "max-age=0, no-cache"
            }
        }).then((response) => {
            console.log(response);
            if (response.status === 200) {
                this.setState({
                    loggedIn: true,
                    userEmail: email,
                    firstTime: true,
                })
            } else if (response.status === 250) {
                this.setState({
                    loggedIn: true,
                    userEmail: email,
                    firstTime: false
                })
            } 
        }).catch(err => {
            console.log(err);
        });
    }

    setUserType(type) {
    	this.setState({
    		userType: type
    	})
    }

    makeSettings() {
        this.setState({
            firstTime: false
        })
    }

    render() {
        return(
        	<BrowserRouter>
        		<Provider value={this.state}>
        			<Main />
        		</Provider>
            </BrowserRouter>
        )
    }
}

render(<App />, document.getElementById("app"));