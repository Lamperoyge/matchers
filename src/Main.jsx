import React, {Component} from 'react';
import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom';
import {Consumer} from './Context';
import Header from './Components/Structure/Header/Header';
import Login from './Components/Composite/Login/Login';
import Dashboard from './Components/Composite/Dashboard/Dashboard';
import Questionnaire from './Components/Composite/Questionnaire/Questionnaire';

export default class Main extends Component {
	render() {
		return(
			<React.Fragment>
			<Consumer>
			{({firstTime, loggedIn}) =>
				<React.Fragment> 
				<Header />
				<Switch>
		        	<Route 
		        		exact path='/'
		        		component = {Login}  
		        	/>
		        	<Route path='/about'>
		       			<div>Alt salut
		       			<Link to='/'>Home</Link>
		       			</div>
		       		</Route>
		       		{firstTime ?
			       		<Route 
			       			path='/dashboard'
			       			component={Questionnaire}
			       		/> :
			       		<Route
			       			path='/dashboard'
			       			component={Dashboard}
			       		/>
		       		}
	       		</Switch>
				{/*!loggedIn &&
					<Redirect to='/'/>*/
				}
				</React.Fragment>
			}
	       	</Consumer>
       		</React.Fragment>
		)
	}
}