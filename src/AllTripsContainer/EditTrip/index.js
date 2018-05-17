import React, { Component } from 'react';
import "../style.css"

class EditTrip extends Component {
	constructor() {
		super();
		this.state = {
			inputVal: ''
		}
	}

	handleInput = (e) => {
		this.setState({inputVal: e.currentTarget.value})
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.editedTrip === '') {
			console.log(nextProps.editedTrip.name);
		}
	}

	handleSubmit = () => {
		this.props.editTrip(this.state.inputVal, this.props.editedTrip)
	}

	render() {
		console.log("render() is being caleld in EditTrip")
		return (
			<div>
				<h1>this is the edit trip page</h1>
				<input type="text" value={this.state.inputVal} onChange={this.handleInput} />
				<button onClick={this.handleSubmit}> Edit </button>
			</div>
		)
	}
}

export default EditTrip;