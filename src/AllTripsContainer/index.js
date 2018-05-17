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
			addedTrip: "",
			tripToEdit: '',
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

	editTrip = async(title, origin, destination, budget, amountSaved, departureDate, returnDate, numOfPassengers, locationCode, checkInDate, checkOutDate) => {
		const id = this.props.editedTripId;
		const trip = await fetch('http://localhost:9292/trips/' + id, {
			method: "PUT",
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
		})

		const response = await trip.json();
		console.log(response);

		return response;
	}


	deleteTrip = async (e) => {
		e.preventDefault();
		const id = e.currentTarget.id; // this may have to change based on samat's stuff
		console.log(id);
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
<<<<<<< HEAD
			return(
					<div className="container">
						<div className="row">
							<div className="eight columns">

							{this.props.showNewTrip ? <AddNewTrip addedTrip={this.state.addedTrip} createTrip={this.createTrip}/> : null}
							{this.props.showTripsIndex ? <TripIndex trips={this.state.trips} deleteTrip={this.deleteTrip} renderEditTripForm ={this.props.renderEditTripForm} /> : null }
							{this.props.showEditTrip ? <EditTrip /> : null }
							{this.props.tripShow ? <TripShow tripToShow={this.props.tripToShow} flightToShow={this.props.flightToShow}/>
												:
											<div />}
						</div>
					</div>
				</div>
			)
		}
=======
		console.log(this.state, 'this is state');
		return(
			<div className="container">
				<div className="row">
					{this.props.showNewTrip ? <AddNewTrip addedTrip={this.state.addedTrip} createTrip={this.createTrip}/> : null} 
				
					{this.props.showTripsIndex ? <TripIndex trips={this.state.trips} deleteTrip={this.deleteTrip} renderEditTripForm={this.props.renderEditTripForm} editedTripId={this.props.editedTripId} getTheTripToEdit={this.props.getTheTripToEdit} tripToEdit={this.props.tripToEdit}/> : null }
 					{this.props.showEditTrip ? <EditTrip editTrip={this.editTrip} tripToEdit={this.props.tripToEdit}/> : null }
 					{this.props.tripShow ? <TripShow tripToShow={this.props.tripToShow} flightToShow={this.props.flightToShow}/>
	       	        	: <div className="eight columns" />}
				</div>
			</div>
		

		)

	}

>>>>>>> 02dfd869c6df1e48e39d4fe1cb3541f119bca465
}

export default AllTripsContainer;


