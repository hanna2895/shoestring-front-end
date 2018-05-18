import React, { Component } from 'react';
import { Card } from 'reactstrap'
import Tooltips from '../Tooltips'
import "../style.css"

class EditTrip extends Component {
	constructor() {
		super();
		this.state = {
			title: '',
			origin: '',
			destination: '',
			budget: '',
			amountSaved: '',
			departureDate: '',
			returnDate: '',
			numOfPassengers: '',
			locationCode: '',
			checkInDate: '',
			checkOutDate: ''
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

	componentDidMount(nextProps) {
		this.setState({
			title: this.props.tripToEdit.trip.title,
			origin: this.props.tripToEdit.flight.origin,
			destination: this.props.tripToEdit.flight.destination,
			budget: this.props.tripToEdit.trip.budget,
			amountSaved: this.props.tripToEdit.trip.saved,
			departureDate: this.props.tripToEdit.flight.departs_at.substring(0,10),
			returnDate: this.props.tripToEdit.flight.arrives_at.substring(0,10),
			numOfPassengers: this.props.tripToEdit.flight.num_of_adults,
			locationCode: this.props.tripToEdit.hotel.location_code,
			checkInDate: this.props.tripToEdit.hotel.check_in,
			checkOutDate: this.props.tripToEdit.hotel.check_out,
		})
	}

	handleSubmit = (e) => { // this will need to change
		e.preventDefault();
		this.props.editTrip(this.state.title, this.state.origin, this.state.destination, this.state.budget, this.state.amountSaved, this.state.departureDate, this.state.returnDate, this.state.numOfPassengers, this.state.locationCode, this.state.checkInDate,
		this.state.checkOutDate)
	}

	render() {

		console.log(this.props);

		return (
			<div className="container">
				<div className="row">
					<div className="eight columns">
						<Card>
						<form>
							<h2>The 411</h2><br />
							<h1>Edit Trip</h1>
							<label> Trip Title </label><br />
							<input type="text" name="title" value={this.state.title} onChange={this.handleInput} /><br />

							<Tooltips />

							<label>Origin </label><br/>
							<input type="text" name="origin" value={this.state.origin} onChange={this.handleInput} /> <br />

							<label>Destination </label><br/>
							<input type="text" name="destination" value={this.state.destination} onChange={this.handleInput} /> <br />

							<label>Budget </label><br/>
							<input type="text" name="budget" value={this.state.budget} onChange={this.handleInput} /> <br />

							<label>Amount Saved </label><br/>
							<input type="text" name="amountSaved" value={this.state.amountSaved} onChange={this.handleInput} /> <br />

							<h2>Up In The Air</h2><br />
							<label>Departure Date </label><br/>
							<input type="text" name="departureDate" value={this.state.departureDate} onChange={this.handleInput} /> <br />

							<label>Return Date </label><br/>
							<input type="text" name="returnDate" value={this.state.returnDate} onChange={this.handleInput} /> <br />

							<label>Number of Passengers</label><br/>
							<input type="text" name="numOfPassengers" value={this.state.numOfPassengers} onChange={this.handleInput} /> <br />

							<h2>Sweet Dreams</h2><br />
							<Tooltips />
							<label>Hotel Location</label><br/>
							<input type="text" name="locationCode" value={this.state.locationCode} onChange={this.handleInput} /> <br />

							<label>Check In Date </label><br/>
							<input type="text" name="checkInDate" value={this.state.checkInDate} onChange={this.handleInput} /> <br />

							<label>Check Out Date</label><br/>
							<input type="text" name="checkOutDate" value={this.state.checkOutDate} onChange={this.handleInput} /> <br />

							<button onClick={this.handleSubmit} className= "button button-alert"> Edit Trip </button>
						</form>
						</Card>
					</div>
				</div>
			</div>
		)
	}
}

export default EditTrip;
