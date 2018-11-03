import React, {Component} from 'react';
import styles from './Header.css';
import {Link} from 'react-router-dom';

export default class Header extends Component {
	render() {
		return (
				<div className={styles.container}>
					<Link to='/'>
						<i className = 'fas fa-hands-helping fa-3x' />
					</Link>
					{/*<h1 className = {styles.title}>
						the matchers
					</h1>*/}
					<div className = {styles.menu}>
						<Link to='/dashboard'>
							dashboard
						</Link>
						<Link to='/about'>
							despre
						</Link>
					</div>
				</div>
		)
	}
}