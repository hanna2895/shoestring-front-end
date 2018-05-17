import React, { Component } from 'react';
import "./style.css"
import TripIndex from './TripIndex'
import AddNewTrip from './AddNewTrip'
import TripShow from './TripShow'

class AllTripsContainer extends Component {
	constructor() {
		super();
		this.state ={
			trips: [],
			addedTrip: ""
			// showNewTrip: false
		}
	}

	componentDidMount() {
		this.getTripsByUser()
			.then((trips) => {
				console.log(trips, "this is trips in componentDidMount");
				this.setState({trips: trips.trip})
			})
			.catch((err) => {
				console.log(err);
			})
	}

	getTripsByUser = async () => {

		const tripsJson = await fetch('http://localhost:9292/trips', {
			credentials: 'include'
		});

		const trips = await tripsJson.json();
		return trips;
	}

	createTrip = async (title, origin, destination, budget, amountSaved, departureDate, returnDate, numOfPassengers, locationCode, checkInDate, checkOutDate) => {
		console.log(title, origin, destination, budget, amountSaved, departureDate, returnDate, numOfPassengers, locationCode, checkInDate, checkOutDate)
		console.log('==================================================================')
		const trips = await fetch('http://localhost:9292/trips', {
			method: "POST",
			credentials: 'include',
			body: JSON.stringify({
				title: title,
				budget: budget,
				amountSaved: amountSaved,
				origin: origin,
				destination: destination,
				departureDate: departureDate,
				returnDate: returnDate,
				numOfPassengers: numOfPassengers,
				locationCode: locationCode,
				// address: address,
				checkInDate: checkInDate,
				checkOutDate: checkOutDate

			})
		});

		const tripParsed = await trips.json();
		console.log(tripParsed, 'this is trip parsed');
		return (tripParsed);
	}
	// openShowTrip = () => {
	// 	console.log('this is renderShowTrip called from TripIndex')
	// 	this.setState({
	// 		tripShow: true
	// 	})
	// }
	// closeShowTrip = () => {
	// 	this.setState({
	// 		tripShow: false
	// 	})
	// }

	render() {
		return(
			<div className="container">
				<div className="row">
					{this.props.tripShow ?
	                	<TripShow tripToShow={this.props.tripToShow} flightToShow={this.props.flightToShow}/>
	                	: <div className="eight columns">

							{this.props.showNewTrip ? <AddNewTrip addedTrip={this.state.addedTrip} createTrip={this.createTrip}/>: <TripIndex trips={this.state.trips} openShowTrip={this.props.openShowTrip}/>}
						</div>
					}
				</div>
			</div>

		)

	}

}

export default AllTripsContainer;
