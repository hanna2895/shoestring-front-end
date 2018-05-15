import React, { Component } from 'react';
import '../style.css';

class AddNewTrip extends Component {
	constructor() {
		super();
		this.state = {
			title: "",
			origin: "",
			destination: "",
			budget: "",
			amountSaved: "",
			departureDate: "", 
			returnDate: "",
			numOfPassengers: ""
		}
	}

	handleInput = (e) => {
		const target = e.target;
		const value = target.value;
		const name = target.name;
		

		this.setState({
			[name]: value
		})
		console.log(this.state, 'this is state in the add new trip component');
	}

	handleSubmit = (e) => {
		e.preventDefault();
	}


	render() {
		return (
			<div>
				<h1> Add New Trip </h1>
				<form>
					<input type="text" name="title" value={this.state.title} onChange={this.handleInput} />
					<button onClick={this.handleSubmit}>Add Trip </button>
				</form>
			</div>

		)
	}
}

export default AddNewTrip;

// title, destination, origin, budget, amount already saved, departure date, return date, number of passengers
// then, this thing will make two api calls to amadeus
// amadeus will return the cheapest flights and the cheapest hotels, which will be rendered on the flight show page
// this page will automatically redirect to the trip show page once that is complete