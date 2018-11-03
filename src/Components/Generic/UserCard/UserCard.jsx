import React, {Component} from 'react';
import styles from './UserCard.css';
import {Consumer} from '../../../Context';

const EASTER_EGGS = [
	'Compatibilitate zodii:',
	'Prieten al padurii:',
	'Frumusete interioara:',
	'Succes in viata:',
	'Iubitor de chinchille:',
	'Artist nedescoperit:',
]

export default class UserCard extends Component {
	constructor(props) {
		super(props);
		this.containerRef = React.createRef();
	}

	/*componentDidMount() {
		this.containerRef.current.addEventListener('mouseenter', function() {
			console.log(this);
			this.children[0].style.animation = 'fadeIn .25s forwards';
		})
	}*/

	componentWillUnmount() {
		this.containerRef.current.classList.add('uk-animation-bottom');
		this.containerRef.current.classList.add('uk-animation-reverse');
	}

	render() {
		return (
			<div className={styles.container} ref={this.containerRef}>
				<Consumer>
				{({userEmail}) =>
					<div className={styles.buttonsBar}>
						<i 
							className="fas fa-thumbs-up fa-2x" 
							style={{position:'absolute', 'left':'10px',top:'5px'}}
							onClick={() => {
								this.props.request(userEmail, this.props.key)
							}}/>
						<i 
							className="fas fa-times fa-2x" 
							style={{position:'absolute', right:'10px',top:'5px'}}
							onClick={() => {
								this.props.remove(this.props.key)
							}}
							/>
					</div>
				}
				</Consumer>
				<div className={styles.photoSection}>
					<img src='/images/placeholder.png' />
				</div>
				<div className={styles.title}>
					<p>{this.props.details.firstName} <span>{this.props.details.lastName}</span></p>
					<p>{this.props.details.position}</p>
				</div>
				<div className={styles.commonStuff}>
					<p>Timp in companie: </p>
					<span>9 ani</span>
					<p>Ce aveti in comun: </p>
					<span>{this.props.details.skills.join(' ')}</span>
					<p>{EASTER_EGGS[Math.floor(Math.random() * 4)]}</p>
					<span>{Math.floor(Math.random() * 20 + 80)}%</span>
				</div>
			</div>
		)
	}
}