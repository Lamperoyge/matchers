import React, {Component} from 'react';
import styles from './Input.css';

export default class Input extends Component {
	render() {
		return (
			<div style={this.props.style}>
				{this.props.title &&
					<React.Fragment>
						<label className={styles.label}>{this.props.title}</label><br/>
					</React.Fragment>
				}
				<input 
					className={styles.input} 
					type = {this.props.type}
					onChange = {(e) => {
						this.props.changeHandler(e.target.value);
					}}
					onKeyPress = {(e) => {
						this.props.onKeyPress(e);
					}}
				></input>
			</div>
		)
	}
}