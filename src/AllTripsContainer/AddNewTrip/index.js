import React, { Component } from 'react';
import AllTripsContainer from '../../AllTripsContainer'
import {Button} from 'reactstrap';
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
<<<<<<< HEAD


=======
		
>>>>>>> cdf3c426a7dd163d8b9455bc5ea258920a6bbbdd
		this.setState({
			[name]: value
		})

	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.createTrip(this.state.title, this.state.origin, this.state.destination, this.state.budget, this.state.amountSaved, this.state.departureDate, this.state.returnDate, this.state.numOfPassengers)
	}

<<<<<<< HEAD
	navigateToIndex = (e) => {
		console.log("button is clikkked");
		this.setState({
			
		})
	}

=======
>>>>>>> cdf3c426a7dd163d8b9455bc5ea258920a6bbbdd
	render() {
		return (
			<div>
				<h2> Add New Trip </h2>
				<form>
<<<<<<< HEAD
					<input type="text" name="title" value={this.state.title} onChange={this.handleInput} />
					<Button onClick={this.handleSubmit}>Add Trip </Button><br /><br />
=======
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
>>>>>>> cdf3c426a7dd163d8b9455bc5ea258920a6bbbdd
				</form>
				<Button onClick={this.navigateToIndex}> Back to Trips </Button>
			</div>

		)
	}
}

export default AddNewTrip;


// then, this thing will make two api calls to amadeus
// amadeus will return the cheapest flights and the cheapest hotels, which will be rendered on the flight show page
// this page will automatically redirect to the trip show page once that is complete
<<<<<<< HEAD
=======

>>>>>>> cdf3c426a7dd163d8b9455bc5ea258920a6bbbdd
