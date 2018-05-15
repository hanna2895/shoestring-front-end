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

	createTrip = async (title, budget, amountSaved, e) => {
		e.preventDefault();
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
		return tripParsed;
	}

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
