import React, {Component} from 'react'

class TripShow extends Component{
	total = () => {
		console.log(this.props.hotelToShow, 'this is hotelToShow')
		const total = this.props.hotelToShow.price + this.props.flightToShow.fare
	}
	render(){
		console.log(this.props.hotelToShow, 'this is hotelToShow')
		return(
			<div>
				<h1>{this.props.tripToShow.title}</h1>
				<p>{this.props.tripToShow.budget}</p>
				<p>{this.props.tripToShow.total}</p>
				<p>{this.props.tripToShow.saved}</p>
				<h2>Flight Information</h2>
				<p>{this.props.flightToShow.origin}</p>
				<p>{this.props.flightToShow.destination}</p>
				<p>{this.props.flightToShow.departs_at}</p>
				<p>{this.props.flightToShow.arrives_at}</p>
				<p>{this.props.flightToShow.airline}</p>
				<p>{this.props.flightToShow.flight_num}</p>
				<p>{this.props.flightToShow.num_of_adults}</p>
				<p>{this.props.flightToShow.fare}</p>
				<h2>Hotel Information</h2>
				<p>{this.props.hotelToShow.location_code}</p>
				<p>{this.props.hotelToShow.check_in}</p>
 				<p>{this.props.hotelToShow.check_out}</p>
 				<p>{this.props.hotelToShow.price}</p>
			</div>
		)
	}
}
export default TripShow;
