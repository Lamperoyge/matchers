import React, {Component, Fragment} from 'react';
import UserCard from '../../Generic/UserCard/UserCard';
import styles from './Dashboard.css';
import {Consumer} from '../../../Context';

export default class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.removeCard = this.removeCard.bind(this);
		this.sendRequest = this.sendRequest.bind(this);
		this.state = {
			matches: [
				{
					firstName: 'Cristi',
					lastName: 'Silav',
					position: 'Frontend Developer',
					skills: [
						'Babel',
						'React',
						'Angular',
						'Comunicare',
					]
				},
				{
					firstName: 'Adrian',
					lastName: 'Mustea',
					position: 'Sef si de toate',
					skills: [
						'Babel',
						'React',
						'Angular',
						'Comunicare',
					]
				},
				{
					firstName: 'Alex',
					lastName: 'Alxxxx',
					position: 'CEO',
					skills: [
						'Babel',
						'React',
						'Angular',
						'Comunicare',
					]
				},
				{
					firstName: 'Beni',
					lastName: 'Goace',
					position: 'Senior Software Engineer',
					skills: [
						'Babel',
						'React',
						'Angular',
						'Comunicare',
					]
				}
			]
		}
	}

	componentDidMount() {
		/*fetch('/matches')
			.then((res) => {
				this.setState({
					matches: res.data
				});
			});*/
	}

	sendRequest(email, idx) {
		fetch(`/request/${email}/${this.state.matches[idx].email}`);
		this.setState((prevState) => {
			let newMatches = JSON.parse(JSON.stringify(prevState.matches));
			newMatches.splice(idx, 1, 
				<label>te-am rezolvat, cererea ta de mentorship a fost trimisa</label>
			);
			return {
				matches: newMatches
			}
		})
	}

	removeCard(idx) {
		this.setState((prevState) => {
			let newMatches = JSON.parse(JSON.stringify(prevState.matches));
			newMatches.splice(idx, 1);
			return {
				matches: newMatches
			}
		})
	}

	render() {
		return (
			<Consumer>
			{({userType}) => 
				userType === 'mentee' ?
				<div className={styles.container}>
					<div>
						<p>ce chestie, am gasit niste oameni care ti se potrivesc foarte bine</p>
						{this.state.matches.slice(0, 3).map((el, idx) => 
							<UserCard 
								details = {el}
								request = {this.sendRequest}
								remove = {this.removeCard}
								key = {idx}
							/>
						)}		
						<label>...adica astia din stanga sunt cei mai misto 3 oameni</label>
					</div>
					<div style={{marginTop:'30px'}}>
						<p>...si ei sunt misto, nu e vina lor ca sunt aici, e a algoritmului</p>
						{this.state.matches.slice(3).map((el, idx) => 
							<UserCard 
								details = {el}
								request = {this.sendRequest}
								remove = {this.removeCard}
								key = {idx + 3} 
							/>
						)}
					</div>	
				</div> :
				<div className={styles.container}>
					<p>INCA LUCRAM, OK?</p>
				</div>
			}
			</Consumer>
		)
	}
}