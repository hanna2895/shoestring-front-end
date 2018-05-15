import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import "./style.css"
import TripIndex from './TripIndex'

class AllTripsContainer extends Component {
	constructor() {
		super();
		this.state ={
			trips: [],
			showTripList: true,
			showNewTrip: false
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
	
		return(
			<div>
				<TripIndex trips={this.state.trips}/>
				<button>Add a New Trip </button>
			</div>

		)

	}

}

export default AllTripsContainer;
