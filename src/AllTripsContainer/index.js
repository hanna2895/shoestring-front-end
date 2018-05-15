import React, { Component } from 'react';
import "./style.css"
import TripIndex from './TripIndex'
import AddNewTrip from './AddNewTrip'

class AllTripsContainer extends Component {
	constructor() {
		super();
		this.state ={
			trips: [],
			addedTrip: {}
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



	render() {
		console.log(this.state, 'this is state');

		return(
			<div>
				{this.props.showNewTrip ? <AddNewTrip />: <TripIndex trips={this.state.trips} addedTrip={this.state.addedTrip}/>}

			</div>

		)

	}

}

export default AllTripsContainer;
