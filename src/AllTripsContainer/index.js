import React, { Component } from 'react';
import "./style.css"

class AllTripsContainer extends Component {
	constructor() {
		super();
		this.state ={
			trips: []
		}
	}

	// user will need to be logged in for this to work
	componentDidMount() {
		this.getTripsByUser()
			.then((trips) => {
				console.log(trips, "this is trips in componentDidMount");
				this.setState({trips: trips.trip})
				// console.log(this.state, "this is state");
			})
			.catch((err) => {
				console.log(err);
			})
	}

	getTripsByUser = async () => {
		// console.log('get trips by user is being called')

		const tripsJson = await fetch('http://localhost:9292/trips', {
			credentials: 'include'
		});
		const trips = await tripsJson.json();
		// console.log(trips, 'trips from getTripsByUser')
		return trips;
	}


	render() {
		const trips = this.state.trips
		// console.log(trips, 'this is trips');
		const tripList = trips.map((trip, i) => {
			return(
				<div key={trip.id} className="trip">
					{trip.title} <br/>
					Trip Budget: {trip.budget} <br/>
					Amount Saved: {trip.saved} <br />
				</div>
			)
		})
		return(
			<div>
				<h1>My Trips </h1>
				{tripList}
			</div>

		)

	}

}

export default AllTripsContainer;
