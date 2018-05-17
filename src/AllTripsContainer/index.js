import React, { Component } from 'react';
import "./style.css"
import TripIndex from './TripIndex'
import AddNewTrip from './AddNewTrip'
import EditTrip from './EditTrip'
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
				// console.log(trips, "this is trips in componentDidMount");
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
		// console.log(title, origin, destination, budget, amountSaved, departureDate, returnDate, numOfPassengers, locationCode, checkInDate, checkOutDate)
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
		this.props.closeShowTrip()
	}


	deleteTrip = async (e) => {
		e.preventDefault();
		const id = parseInt(e.target.previousSibling.id) // this may have to change based on samat's stuff
		// console.log(id);
		const trip = await fetch('http://localhost:9292/trips/' + id, {
			method: "DELETE",
			credentials: 'include'
		})

		// const response = await trip.json();

		this.setState({
			trips: this.state.trips.filter((trip) => {
				return trip.id != id
			})
		})
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

		// console.log(this.state, 'this is state');
		// const isHidden = this.props.showTripsIndex ? null : hideDiv; 

		return(
			<div className="container">
				<div className="row">
					{this.props.showNewTrip ?
						<AddNewTrip addedTrip={this.state.addedTrip} createTrip={this.createTrip} closeShowTrip={this.closeShowTrip}/>
						: <div>
							{this.props.showTripsIndex ? 
								<TripIndex openShowTrip={this.props.openShowTrip} trips={this.state.trips} deleteTrip={this.deleteTrip} renderEditTripForm ={this.props.renderEditTripForm} /> 
								: <div>
									{this.props.showEditTrip ?
										<EditTrip /> 
										: <div>
 											<TripShow tripToShow={this.props.tripToShow} hotelToShow={this.props.hotelToShow} flightToShow={this.props.flightToShow}/>
 										</div>
 									}
 								</div>
 							}
 						</div>
 					}
				</div>
			</div>

		)

	}

}

export default AllTripsContainer;
