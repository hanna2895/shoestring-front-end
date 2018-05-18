import React from 'react';
import DataComponent from './DataComponent'

import { Container, Card, Button, CardTitle, CardText, Row } from 'reactstrap';
import "../style.css";

const TripIndex = (props) => {
	const trips = props.trips
	console.log(trips, "this is trips");
	const tripList = trips.map((trip, i) => {
		return (

			<Row key={trip.id}>
				<Card body key={trip.id} className="trip">
					<div id={trip.id}>
						<CardTitle>{trip.title}</CardTitle> <br/>
						<CardText>Total Cost: {trip.cost}</CardText> <br/>
						<CardText>Amount Saved: {trip.saved} </CardText><br />
						<button className="button button-primary" onClick={props.openShowTrip}>More Details</button><br />
						<button className="button button-primary" onClick={props.renderEditTripForm}>Edit Trip </button><br /><br />
						<button className="button button-primary" onClick={props.deleteTrip}> Delete Trip </button><br />


					</div>
					<div>
						<DataComponent cost={trip.cost} saved={trip.saved}/>
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
