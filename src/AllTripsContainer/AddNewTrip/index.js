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

	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.createTrip(this.state.title, this.state.origin, this.state.destination, this.state.budget, this.state.amountSaved, this.state.departureDate, this.state.returnDate, this.state.numOfPassengers)
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
					<button type="submit" onClick={this.handleSubmit}>Add Trip </button>
				</form>
			</div>

		)
	}
}

export default AddNewTrip;


// then, this thing will make two api calls to amadeus
// amadeus will return the cheapest flights and the cheapest hotels, which will be rendered on the flight show page
// this page will automatically redirect to the trip show page once that is complete

