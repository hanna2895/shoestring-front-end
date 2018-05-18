import React, { Component } from 'react';
import Tooltips from '../Tooltips'
import { Card } from 'reactstrap'
import '../style.css';

class AddNewTrip extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "",
			origin: "",
			destination: "",
			budget: "",
			amountSaved: "",
			departureDate: "",
			returnDate: "",
			numOfPassengers: "",
			locationCode: "",
			checkInDate: "",
			checkOutDate: ""
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
		this.props.createTrip(this.state.title, this.state.origin, this.state.destination, this.state.budget, this.state.amountSaved, this.state.departureDate, this.state.returnDate, this.state.numOfPassengers, this.state.locationCode, this.state.checkInDate,
		this.state.checkOutDate)
	}


	render() {
		return (

				<div className="container">
					<div className="row">
						<div className="eight columns">
							<Card>
							<h1>Create a New Trip</h1><br />
							<form onSubmit={this.handleSubmit}>

							<h2>The 411</h2><br />
								<label> Trip Title </label><br />
								<input type="text" name="title" value={this.state.title} onChange={this.handleInput} /> <br />
								<Tooltips />
								<label> Origin </label><br />
								<input type="text" name="origin" value={this.state.origin} onChange={this.handleInput} /><br />

								<label> Destination </label><br />
								<input type="text" name="destination" value={this.state.destination} onChange={this.handleInput}/><br />

								<label>Budget</label><br />
								$<input type="text" name="budget" value={this.state.budget} onChange={this.handleInput} /><br />

								<label>Amount Saved</label><br />
								$<input type="text" name="amountSaved" value={this.state.amountSaved} onChange={this.handleInput} /><br />

								<h2>Up In The Air</h2><br />
								<label>Departure Date</label><br />
								<input type="text" name="departureDate" value={this.state.departureDate} onChange={this.handleInput} /><br />

								<label>Return Date</label><br />
								<input type="text" name="returnDate" value={this.state.returnDate} onChange={this.handleInput} /><br />

								<label>Number of Passengers</label><br />
								<input type="text" name="numOfPassengers" value={this.state.numOfPassengers} onChange={this.handleInput} /><br />

								<h2>Sweet Dreams</h2><br />
								<Tooltips />

								<label>Hotel Location</label><br />
								<input type="text" name="locationCode" value={this.state.locationCode} onChange={this.handleInput} /><br />

								<label>Check In Date</label><br />
								<input type="text" name="checkInDate" value={this.state.checkInDate} onChange={this.handleInput} /><br />

								<label>Check Out Date</label><br />
								<input type="text" name="checkOutDate" value={this.state.checkOutDate} onChange={this.handleInput} /><br />

								<button type="submit" className= "button button-primary">Add Trip </button>

							</form>
						</Card>
						</div>
					</div>
				</div>

		)
	}
}

export default AddNewTrip;


// then, this thing will make two api calls to amadeus
// amadeus will return the cheapest flights and the cheapest hotels, which will be rendered on the flight show page
// this page will automatically redirect to the trip show page once that is complete
