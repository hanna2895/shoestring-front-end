import React from 'react';

import { Card, Button, CardTitle, CardText, Row } from 'reactstrap';
import "../style.css";

const TripIndex = (props) => {
	const trips = props.trips;
	const tripList = trips.map((trip, i) => {
		return (
			<Row key={trip.id}>
				<Card body key={trip.id} className="trip">
					<div>
						<CardTitle>{trip.title}</CardTitle> <br/>
						<CardText>Trip Budget: {trip.budget}</CardText> <br/>
						<CardText>Amount Saved: {trip.saved} </CardText><br />
						<Button id={trip.id} onClick={props.openShowTrip}>More Details</Button>
						<Button id={trip.id} onClick={props.deleteTrip}> Delete Trip </Button>

					</div>
					<div>
						<p>Data viz will go here</p>
					</div>
				</Card>
			</Row>
		)
	})
	return (
		<div className="trip-cards">
			<h1>My Trips</h1>
			{tripList}
		</div>
	)

}

export default TripIndex;
