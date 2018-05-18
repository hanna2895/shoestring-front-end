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
						<h1>Trip Title:</h1>
						<h1>{trip.title}</h1> <br/>
						<h3>Trip Cost:<br/>
						 ${trip.cost}</h3> <br/>
						<h3>Amount I've Saved:<br />
						${trip.saved} </h3><br />
						<button className="button button-primary" onClick={props.openShowTrip}>More Details</button><br />
						<button className="button button-primary" onClick={props.renderEditTripForm}>Edit Trip </button><br /><br />
						<button className="button button" onClick={props.deleteTrip}> Delete Trip </button><br />
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
			{tripList}
		</div>
	)

}

export default TripIndex;
