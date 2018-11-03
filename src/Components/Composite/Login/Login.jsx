import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styles from './Login.css';
import Input from '../../Generic/Input/Input';
import {Consumer} from '../../../Context';

export default class Login extends Component {
	constructor(props) {
		super(props);
		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handlePassChange = this.handlePassChange.bind(this);
		this.state = {
			email: '',
			password: '',
		}
	}

	handleEmailChange(value) {
		this.setState({
			email: value
		})
	}

	handlePassChange(value) {
		this.setState({
			password: value
		})
	}

	render() {
		return(
			<Consumer>
			{({setUserType, logInHandle, loggedIn}) =>
				<div className = {styles.container}>
					{!loggedIn ? 
						<React.Fragment>
							<h1 className = {styles.title}>
								menteet
							</h1><br/>
							<Input 
								type='text'
								title='e-mail' 
								style= {{marginTop: '32px'}} 
								changeHandler = {this.handleEmailChange}
								onKeyPress = {(e) => {
									if (e.key === 'Enter') {
										logInHandle(this.state.email, this.state.password);
									}
								}}
								/>
							<Input 
								type='password'
								title='parola' 
								style= {{marginTop: '32px'}}
								changeHandler = {this.handlePassChange}
								onKeyPress = {(e) => {
									if (e.charCode === 13) {
										console.log(e);
										logInHandle(this.state.email, this.state.password);
									}
								}}
								/>
									<button 
										className={styles.button}
										onClick={() => {
											logInHandle(this.state.email, this.state.password);
										}}
									>
										LOGIN
									</button>
						</React.Fragment> :
							<React.Fragment>
								<h1 className = {styles.title}>
									ce ti-ai propus astazi?
								</h1>
								<Link 
									to='/dashboard'
									className={`${styles.button} ${styles.blockButton}`}
									onClick={() => {
										setUserType('mentor')
									}}
									>
									SA AJUT
								</Link><br/>
								<Link 
									to='/dashboard'
									className={`${styles.button} ${styles.blockButton}`}
									style={{marginTop:'10px'}}
									onClick={() => {
										setUserType('mentee')
									}}
									>
									SA INVAT
								</Link>
							</React.Fragment>
					}
				</div>
			}
			</Consumer>
		)
	}
}