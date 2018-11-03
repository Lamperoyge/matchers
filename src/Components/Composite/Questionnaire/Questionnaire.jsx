import React, {Component, Fragment} from 'react';
import styles from './Questionnaire.css';
import Option from '../../Generic/FilterOption/FilterOption';
import {Consumer} from '../../../Context';

export default class Questionnaire extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selected: [],
			tech: [],
			soft: [],
			hobby: [],
		}
		this.sendOptions = this.sendOptions.bind(this);
		this.addOption = this.addOption.bind(this);
		this.removeOption = this.removeOption.bind(this);
	}

	componentDidMount() {
		console.log('sal');
		fetch('getAllOptions')
			.then((res) => {
				return res.json();
			}).then((res) => {
				console.log(res);
				const tech = res.data.filter(el => el.type === 'tech');
				const soft = res.data.filter(el => el.type === 'soft');
				const hobby = res.data.filter(el => el.type === 'hobby');

				this.setState({
					tech: tech,
					soft: soft,
					hobby: hobby,
				})
			});
	}

	addOption(option) {
		this.setState((prevState) => {
			let newOptions = JSON.parse(JSON.stringify(prevState.selected));
			newOptions.push(option);
			return {
				selected: newOptions
			}
		});
	}

	removeOption(option) {
		this.setState((prevState) => {
			let newOptions = JSON.parse(JSON.stringify(prevState.selected));
			let idx = newOptions.indexOf(option);
			newOptions.splice(idx, 1);
			return {
				selected: newOptions
			}
		});
	}

	sendOptions(email) {
		fetch(`/user/${email}/setOptions`, {
			method: 'POST',
			headers: {
     			"Content-type": "application/json; charset=UTF-8",
     		},
     		body: JSON.stringify(this.state.selected)
		}).then(() => {});
	}

	render() {
		return (
			<Consumer>
			{({userType, makeSettings, userEmail}) =>
				<div className={styles.container}>
					{userType === 'mentor' ?
						<p>pentru inceput, ce ti-ar placea sa ii inveti pe altii?</p> :
						<p>pentru inceput, spune-ne ce cauti la un mentor</p>
					}
					<span style={{
						marginTop:'-10px',
						marginLeft: '0',
					}} className = {styles.infoLabel}>
					(nu uita sa alegi cel putin o optiune din fiecare categorie)</span>
					<ul className={styles.list}>
						<li>
							<a className={styles.sectionTitle} 
								href="#"
							> skill-uri tehnice 
								<span className = {styles.infoLabel}>
									(alea tari)
								</span>
							</a><br/>
							<div className={styles.optionsContainer}>
							{
								this.state.tech.map(el => 
									<Option 
										tech={el.name}
										addOption={this.addOption}
										removeOption={this.removeOption} 
									/>
								)
							}
							</div>
						</li>
						<li>
							<a className={styles.sectionTitle} 
								href="#"
							> skill-uri soft
								<span className = {styles.infoLabel}>	
									(alea moi)
								</span>
							</a><br/>
							<div className={styles.optionsContainer}>
							{
								this.state.soft.map(el => 
									<Option 
										value={el.name} 
										addOption={this.addOption}
										removeOption={this.removeOption} 
									/>
								)
							}
							</div>
						</li>
						<li>
							<a className={styles.sectionTitle} 
								href="#"
							> hobby-uri
								<span className = {styles.infoLabel}>	
									(alea interesante)
								</span>
							</a><br/>
							<div className={styles.optionsContainer}>
							{
								this.state.hobby.map(el => 
									<Option 
										value={el.name}
										addOption={this.addOption}
										removeOption={this.removeOption}  
									/>
								)
							}
							</div>
						</li>
					</ul>
					<button 
						className={styles.button}
						onClick={() => {
							this.sendOptions(userEmail);
							makeSettings();
						}}
						>hai sa-ti gasim un mentor</button>	
				</div>
			}
			</Consumer>
		)
	}
}