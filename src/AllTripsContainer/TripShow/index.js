import React, {Component} from 'react'
import { Container, Card, Button, CardTitle, CardText, Row } from 'reactstrap';

class TripShow extends Component{
	render(){
		const departureDate = this.props.flightToShow.departs_at.substring(0,10)
		const returnDate = this.props.flightToShow.arrives_at.substring(0,10)
		console.log(departureDate, returnDate);

		return(
			<div>
				<Card>
				<h1>Trip Title:</h1>
					<h1>{this.props.tripToShow.title}</h1>
					<h2>Trip Budget:</h2>
					<h3>${this.props.tripToShow.budget}</h3>
					<h2>Total Trip Cost:</h2>
					<h3>${this.props.tripToShow.total}</h3>
					<h2>Amount I've Saved:</h2>
					<h3>${this.props.tripToShow.saved}</h3>
				<br />
				<br />
				<br />

				<h1>Flight Information</h1>
					<h2>Flight Origin:</h2>
						<h3>{this.props.flightToShow.origin}</h3>
					<h2>Flight Destination:</h2>
						<h3>{this.props.flightToShow.destination}</h3>
					<h2>Departure Date:</h2>
						<h3>{departureDate}</h3>
					<h2>Arrival Date:</h2>
						<h3>{returnDate}</h3>
					<h2>Airline:</h2>
						<h3>{this.props.flightToShow.airline}</h3>
					<h2>Flight Number:</h2>
						<h3>{this.props.flightToShow.flight_num}</h3>
					<h2>Number of Passengers:</h2>
						<h3>{this.props.flightToShow.num_of_adults}</h3>
					<h2>Total Fare (including tax):</h2>
						<h3>${this.props.flightToShow.fare}</h3>
				<br />
				<br />
				<br />
				<h1>Hotel Information</h1>
					<h2>Nearest Airport:</h2>
						<h3>{this.props.hotelToShow.location_code}</h3>
					<h2>Hotel Address:</h2>
						<h3>{this.props.hotelToShow.address}</h3>
					<h2>Check In Date:</h2>
						<h3>{this.props.hotelToShow.check_in}</h3>
					<h2>Check Out Date:</h2>
						<h3>{this.props.hotelToShow.check_out}</h3>
					<h2>Booking Code:</h2>
						<h3>{this.props.hotelToShow.booking_code}</h3>
					<h2>Total Cost:</h2>
						<h3>${this.props.hotelToShow.total_price}</h3>

			</Card>
			</div>
		)
	}
}


export default TripShow;
