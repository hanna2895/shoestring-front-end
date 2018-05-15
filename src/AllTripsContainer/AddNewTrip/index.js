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
		// then, this thing will make two api calls to amadeus
		// amadeus will return the cheapest flights and the cheapest hotels, which will be rendered on the flight show page
	}


	render() {
		return (
			<div>
				<h1> Add New Trip </h1>
				<form>
					<label> Trip Title </label>
					<input type="text" name="title" value={this.state.title} onChange={this.handleInput} /> <br />
					<label> Origin </label>
					<input type="text" name="origin" value={this.state.origin} onChange={this.handleInput} /><br />
					<label> Destination </label>
					<input type="text" name="destination" value={this.state.destination} onChange={this.handleInput}/><br />
					<label>Budget</label>
					$<input type="text" name="budget" value={this.state.budget} onChange={this.handleInput} /><br />
					<label>Amount Saved</label>
					$<input type="text" name="amountSaved" value={this.state.amountSaved} onChange={this.handleInput} /><br />
					<label>Departure Date</label>
					<input type="text" name="departureDate" value={this.state.departureDate} onChange={this.handleInput} /><br />
					<label>Return Date</label>
					<input type="text" name="returnDate" value={this.state.returnDate} onChange={this.handleInput} /><br />
					<label>Number of Passengers</label>
					<input type="text" name="numOfPassengers" value={this.state.numOfPassengers} onChange={this.handleInput} /><br />
					<button onClick={this.handleSubmit}>Add Trip </button>
				</form>
			</div>

		)
	}
}

export default AddNewTrip;



// this page will automatically redirect to the trip show page once that is complete