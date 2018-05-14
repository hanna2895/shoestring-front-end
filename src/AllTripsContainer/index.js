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
				console.log(trips);
				this.setState({trips: trips.trip})
				console.log(this.state);
			})
			.catch((err) => {
				console.log(err);
			})
	}

	getTripsByUser = async () => {

		const tripsJson = await fetch('http://localhost:9292/trips', {
			// credentials: 'include' <-- need to put this back in once login function is added
		});
		const trips = await tripsJson.json();
		return trips;
	}


	render() {
		const trips = this.state.trips
		console.log(trips, 'this is trips');
		const tripList = trips.map((trips, i) => {
			return(
				<div key={trips.id} className="trip">
					{trips.title} <br/>
					Trip Budget: {trips.budget} <br/>
					Amount Saved: {trips.saved} <br />
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