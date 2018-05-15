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


		this.setState({
			[name]: value
		})
		console.log(this.state, 'this is state in the add new trip component');
	}

	handleSubmit = (e) => {
		e.preventDefault();
	}

	navigateToIndex = (e) => {
		console.log("button is clikkked");
		this.setState({
			
		})
	}

	render() {
		return (
			<div>
				<h2> Add New Trip </h2>
				<form>
					<input type="text" name="title" value={this.state.title} onChange={this.handleInput} />
					<Button onClick={this.handleSubmit}>Add Trip </Button><br /><br />
				</form>
				<Button onClick={this.navigateToIndex}> Back to Trips </Button>
			</div>

		)
	}
}

export default AddNewTrip;

// title, destination, origin, budget, amount already saved, departure date, return date, number of passengers
// then, this thing will make two api calls to amadeus
// amadeus will return the cheapest flights and the cheapest hotels, which will be rendered on the flight show page
// this page will automatically redirect to the trip show page once that is complete
