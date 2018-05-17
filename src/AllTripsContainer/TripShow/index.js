import React, {Component} from 'react'

class TripShow extends Component{
	render(){
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
				
			</div>
		)
	}
}
// <p>{this.state.location}</p>
// 				<p>{this.state.check_in}</p>
// 				<p>{this.state.check_out}</p>
// 				<p>{this.state.num_of_rooms}</p>
// 				<p>{this.state.price}</p>

export default TripShow;
