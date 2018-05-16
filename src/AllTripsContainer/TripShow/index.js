import React, {Component} from 'react'

class TripShow extends Component{
	constructor(){
		super();
		this.state ={
			// trip
			title: 'grand canyon',
			budget: '1',
			saved: '1',
			// flight
			origin: '1',
			destination: '1',
			departs_at: '1',
			arrives_at: '1',
			airline: '1',
			num_of_adults: '1',
			flight_num: '1',
			fare: '1',
			// hotel
			location: '1',
			check_in: '1',
			check_out: '1',
			num_of_rooms: '1',
			price: '1',
			total: '1'
		}
	}
	componentWillReceiveProps(nextProps){
		if(nextProps.tripToShow === []){

        } else {
            this.setState({
            	title: nextProps.tripToShow.title,
				budget: nextProps.tripToShow.budget,
				saved: nextProps.tripToShow.saved,
				// flight
				origin: nextProps.flightToShow.origin,
				destination: nextProps.flightToShow.destination,
				departs_at: nextProps.flightToShow.departs_at,
				arrives_at: nextProps.flightToShow.arrives_at,
				airline: nextProps.flightToShow.airline,
				num_of_adults: nextProps.flightToShow.num_of_adults,
				flight_num: nextProps.flightToShow.flight_num,
				fare: nextProps.flightToShow.fare,
				// hotel
				location: '1',
				check_in: '1',
				check_out: '1',
				num_of_rooms: '1',
				price: '1',
				total: '1'
			})
       	}
	}
	render(){
		console.log('this is trip show component')
		return(
			<div>
				<h1>{this.state.title}</h1>
				<p>{this.state.budget}</p>
				<p>{this.state.total}</p>
				<p>{this.state.saved}</p>
				<h2>Flight Information</h2>
				<p>{this.state.origin}</p>
				<p>{this.state.destination}</p>
				<p>{this.state.departs_at}</p>
				<p>{this.state.arrives_at}</p>
				<p>{this.state.airline}</p>
				<p>{this.state.flight_num}</p>
				<p>{this.state.num_of_adults}</p>
				<p>{this.state.fare}</p>
				<h2>Hotel Information</h2>
				<p>{this.state.location}</p>
				<p>{this.state.check_in}</p>
				<p>{this.state.check_out}</p>
				<p>{this.state.num_of_rooms}</p>
				<p>{this.state.price}</p>
			</div>
		)
	}
}


export default TripShow;
