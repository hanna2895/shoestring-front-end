import React, { Component } from 'react';
import AllTripsContainer from '../../AllTripsContainer'
import { Container, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
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

	navigateToIndex = (e) => {
		console.log("button is clikkked");
		this.setState({

		})
	}

	render() {
		return (
			<Container>
					<Form>
					<h2>Create a New Trip</h2><br />
					<Label> Trip Title </Label>
					<Input type="text" name="title" value={this.state.title} onChange={this.handleInput} /> <br />
					<Label> Origin </Label>
					<Input type="text" name="origin" value={this.state.origin} onChange={this.handleInput} /><br />
					<Label> Destination </Label>
					<Input type="text" name="destination" value={this.state.destination} onChange={this.handleInput}/><br />
					<Label>Budget</Label>
					$<Input type="text" name="budget" value={this.state.budget} onChange={this.handleInput} /><br />
					<Label>Amount Saved</Label>
					$<Input type="text" name="amountSaved" value={this.state.amountSaved} onChange={this.handleInput} /><br />
					<Label>Departure Date</Label>
					<Input type="text" name="departureDate" value={this.state.departureDate} onChange={this.handleInput} /><br />
					<Label>Return Date</Label>
					<Input type="text" name="returnDate" value={this.state.returnDate} onChange={this.handleInput} /><br />
					<Label>Number of Passengers</Label>
					<Input type="text" name="numOfPassengers" value={this.state.numOfPassengers} onChange={this.handleInput} /><br />
					<Button type="submit" onClick={this.handleSubmit}>Add Trip </Button>
				</Form>

		</Container>

		)
	}
}

export default AddNewTrip;


// then, this thing will make two api calls to amadeus
// amadeus will return the cheapest flights and the cheapest hotels, which will be rendered on the flight show page
// this page will automatically redirect to the trip show page once that is complete
