import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
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
				console.log(this.state, "this is state");
			})
			.catch((err) => {
				console.log(err);
			})
	}

	getTripsByUser = async () => {
		console.log('get trips by user is being called')

		const tripsJson = await fetch('http://localhost:9292/trips', {
			credentials: 'include'
		});
		const trips = await tripsJson.json();
		console.log(trips, 'trips from getTripsByUser')
		return trips;
	}


	render() {
		const trips = this.state.trips
		console.log(trips, 'this is trips');
		const tripList = trips.map((trip, i) => {
			return(
				<Row>
				<Card body key={trip.id} className="trip">
					<div>
					<CardTitle>{trip.title}</CardTitle> <br/>
					<CardText>Trip Budget: {trip.budget}</CardText> <br/>
					<CardText>Amount Saved: {trip.saved} </CardText><br />
					<Button>More Details</Button>
					</div>
					<div>
						<p>Data viz will go here</p>
					</div>
				</Card>
				</Row>
			)
		})
		return(
			<div className="trip-cards">
				<h1>My Trips </h1>
				
				{tripList}
				
			</div>

		)
		
	}

}

export default AllTripsContainer;