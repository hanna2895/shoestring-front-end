import React, {Component} from 'react'

class TripShow extends Component{
	render(){
		const departureDate = this.props.flightToShow.departs_at.substring(0,10)
		const returnDate = this.props.flightToShow.arrives_at.substring(0,10)
		console.log(departureDate, returnDate);

		return(
			<div>
				<h1>{this.props.tripToShow.title}</h1>
				<p>{this.props.tripToShow.budget}</p>
				<p>{this.props.tripToShow.total}</p>
				<p>{this.props.tripToShow.saved}</p>

				<h2>Flight Information</h2>
				<p>{this.props.flightToShow.origin}</p>
				<p>{this.props.flightToShow.destination}</p>
				<p>{departureDate}</p>
				<p>{returnDate}</p>
				<p>{this.props.flightToShow.airline}</p>
				<p>{this.props.flightToShow.flight_num}</p>
				<p>{this.props.flightToShow.num_of_adults}</p>
				<p>{this.props.flightToShow.fare}</p>

				<h2>Hotel Information</h2>
				<p>{this.props.hotelToShow.location_code}</p>
				<p>{this.props.hotelToShow.address}</p>
				<p>{this.props.hotelToShow.check_in}</p>
				<p>{this.props.hotelToShow.check_out}</p>
				<p>{this.props.hotelToShow.booking_code}</p>
				<p>{this.props.hotelToShow.total_price}</p>

			</div>
		)
	}
}


export default TripShow;
