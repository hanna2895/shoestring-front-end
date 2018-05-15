import React, { Component } from 'react';
import "./style.css"
import TripIndex from './TripIndex'
import AddNewTrip from './AddNewTrip'

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

	createTrip = async (title, origin, destination, budget, amountSaved, departureDate, returnDate, numOfPassengers) => {
		// e.preventDefault();
		const trips = await fetch('http://localhost:9292/trips', {
			method: "POST",
			credentials: 'include',
			body: JSON.stringify({
				title: title,
				budget: budget,
				amountSaved: amountSaved
			})
		});

		const tripParsed = await trips.json();
		console.log(tripParsed, 'this is trip parsed');

		const flight = await fetch('http://localhost:9292/flights', {
			method: "POST",
			credentials: 'include',
			body: JSON.stringify({
				origin: origin,
				destination: destination,
				departureDate: departureDate,
				returnDate: returnDate,
				numOfPassengers: numOfPassengers
			})
		})

		const flightParsed = await flight.json();
		console.log(flightParsed, 'this is flight parsed');
		
		return (tripParsed, flightParsed);
	}


	// getFlight = async (e) => {
	// 	// e.preventDefault();
	// 	console.log('get flight is being called');
	// 	const flightJson = await fetch('localhost:9292/new_endpoint')
	// 	fetch('http://api.sandbox.amadeus.com/v1.2/flights/low-fare-search?origin=IST&destination=BOS&departure_date=2018-10-15&return_date=2018-10-21&number_of_results=3&apikey=CsAYiUDotu5fFRg8Gl7WFv4AFCqSxRhQ')
	// 	console.log(flightJson, 'this is flight json');
	// 	const flight = await flightJson.json();
	// 	console.log(flight);



	// }



	render() {
		console.log(this.state, 'this is state');

		return(
			<div>
				{this.props.showNewTrip ? <AddNewTrip addedTrip={this.state.addedTrip} createTrip={this.createTrip}/>: <TripIndex trips={this.state.trips}/>}

			</div>

		)

	}

}

export default AllTripsContainer;
