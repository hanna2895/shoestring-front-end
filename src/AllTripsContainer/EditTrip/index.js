import React, { Component } from 'react';
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

	componentWillReceiveProps(e, nextProps) {
		const target = e.target;
		const value = target.value;
		const name = target.name;
		this.setState({
			[name]: value
		})
	}

	handleSubmit = (e) => { // this will need to change
		e.preventDefault();
		this.props.editTrip(this.state.title, this.state.origin, this.state.destination, this.state.budget, this.state.amountSaved, this.state.departureDate, this.state.returnDate, this.state.numOfPassengers, this.state.locationCode, this.state.checkInDate,
		this.state.checkOutDate)
	}

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="eight columns">
						<form>
							<h1>Edit Trip</h1>
							<label> Trip Title </label><br /> 
							<input type="text" name="title" value={this.props.tripToEdit.trip.title} onChange={this.handleInput} /><br />

							<label>Origin </label><br/>
							<input type="text" name="origin" value={this.props.tripToEdit.flight.origin} onChange={this.handleInput} /> <br />

							<label>Destination </label><br/>
							<input type="text" name="destination" value={this.props.tripToEdit.flight.destination} onChange={this.handleInput} /> <br />

							<label>Budget </label><br/>
							<input type="text" name="budget" value={this.props.tripToEdit.trip.budget} onChange={this.handleInput} /> <br />

							<label>Amount Saved </label><br/>
							<input type="text" name="amountSaved" value={this.props.tripToEdit.trip.saved} onChange={this.handleInput} /> <br />

							<label>Departure Date </label><br/>
							<input type="text" name="departureDate" value={this.props.tripToEdit.flight.departs_at} onChange={this.handleInput} /> <br />

							<label>Return Date </label><br/>
							<input type="text" name="returnDate" value={this.props.tripToEdit.flight.arrives_at} onChange={this.handleInput} /> <br />

							<label>Number of Passengers</label><br/>
							<input type="text" name="numOfPassengers" value={this.props.tripToEdit.flight.num_of_adults} onChange={this.handleInput} /> <br />

							<label>Hotel Location ** Use Airport Code**</label><br/>
							<input type="text" name="locationCode" value={this.state.locationCode} onChange={this.handleInput} /> <br />

							<label>Check In Date </label><br/>
							<input type="text" name="checkInDate" value={this.state.checkInDate} onChange={this.handleInput} /> <br />

							<label>Check Out Date</label><br/>
							<input type="text" name="checkOutDate" value={this.state.checkOutDate} onChange={this.handleInput} /> <br />

							<button onClick={this.handleSubmit}> Edit Trip </button>
						</form>
					</div>
				</div>
			</div>
		)
	}
}

export default EditTrip;