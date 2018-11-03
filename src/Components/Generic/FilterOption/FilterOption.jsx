import React, {Fragment, Component} from 'react';
import styles from './FilterOption.css';

export default class FilterOption extends Component {
	render() {
		return (
				<label className={styles.container}>
					{this.props.tech ? 
					<i className={"devicon-" + this.props.tech + "-plain"} /> :
					this.props.value
					}
  					<input 
  						type="checkbox" 
  						autoComplete="off" 
  						onClick={(e) => {
  							if (e.target.checked === true) {
  								this.props.addOption(this.props.value ? this.props.value : this.props.tech);
  							} else {
  								this.props.removeOption(this.props.value ? this.props.value : this.props.tech);
  							}
  						}}
  					/>
  					<span className={styles.checkmark}></span>
				</label>
		)
	}
}