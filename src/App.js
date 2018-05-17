import React, { Component } from 'react';
import './App.css';
import LoginRegister from './LoginRegister'
import UserSidebar from './UserSidebar'
import AllTripsContainer from './AllTripsContainer';
import Navbar from './Navbar'
import UserEditModal from './UserEditModal'

class App extends Component {
  constructor(){
    super();
    this.state = {
      loggedIn: false,
      loginError: '',
      user_id: '',
      name: '',
      username: '',
      showNewTrip: false,
      showTripsIndex: true,
      showEditTrip: false,
      editedTripId: '',
      tripToEdit: '',
      photo: '',
      openModal: false,
      userEditError: '',
      tripShow: false,
      tripToShow: [],
      flightToShow: [],
      hotelToShow: []
    }
  }

  login = async (username, password) => {
    const userLogin = await fetch('http://localhost:9292/user/login', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({
        username: username,
        password: password
      })
    })
    const loginResponse = await userLogin.json()
    if(loginResponse.success){
      this.setState({
        loggedIn: true,
        tripShow: false,
        showNewTrip: false
      })
      this.showUserSidebar()
      .then((user) => {
        this.setState({
          user_id: user.found_user.id,
          name: user.found_user.name,
          username: user.found_user.username,
          photo: user.found_user.photo
        })
      })
      .catch((err) => {
        console.log(err);
      })
    } else {
      this.setState({
        loginError: loginResponse.message
      })
    }
  }

  register = async (name, username, password, photo) => {
    const userRegister = await fetch('http://localhost:9292/user/register', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({
        name: name,
        username: username,
        password: password,
        photo: photo
      })
    })
    const registrationResponse = await userRegister.json();
    if(registrationResponse.success){
      this.setState({
        loggedIn: true,
        tripShow: false,
        showNewTrip: false
      })
      this.showUserSidebar()
      .then((user) => {
        this.setState({
          user_id: user.found_user.id,
          name: user.found_user.name,
          username: user.found_user.username,
          photo: user.found_user.photo
        })
      })
      .catch((err) => {
        console.log(err);
      })
    } else {
      this.setState({
        loginError: registrationResponse.message
      })
    }
  }

  logout = async (username, password) => {
    const userLogout = await fetch('http://localhost:9292/user/logout', {
        // method: 'GET'
    });
    // console.log(userLogout, "logout button being clicked");
    const logoutResponse = await userLogout.json();
    if(logoutResponse.success){
      this.setState({
        loggedIn: false
      })
    } else {
      this.setState({
        loggedIn: true
      })
    }
  }

  showUserSidebar = async () => {
    // console.log('show user sidebar');

    const userJson = await fetch('http://localhost:9292/user', {
      credentials: 'include'
    });

    const user = await userJson.json();

    return user;
  };

  openModal = async (e) => {
    const userToEdit = await fetch('http://localhost:9292/user', {
      credentials: 'include'
    });
    const foundUser = await userToEdit.json()
    this.setState({
      openModal: true,
      userToEdit: foundUser.found_user
    })
  }

  closeModal = (e) => {
    // console.log("button being clicked and function called");
    this.setState({
      openModal: false,
    })
  }

  editUser = async (name, username, password, photo, id) => {
    const user = await fetch('http://localhost:9292/user/' + id, {
      method: 'PUT',
      credentials: 'include',
      body: JSON.stringify({
        name: name,
        username: username,
        password: password,
        photo: photo
      })
    });
    const response = await user.json()
    // console.log(response.user)
    if(response.success){
      this.setState({
        name: name,
        username: username,
        photo: photo,
        openModal: false
      })
    } else {
      this.setState({
        userEditError: response.message
      })
    }
  }

  renderAddNewTripForm = () => {
    // console.log('this add new trip function is being called on the button');
    this.setState({
      showNewTrip: true,
      showTripsIndex: false,
      showEditTrip: false
    })
  }

  openShowTrip = async (e) => {
    // console.log("this is openShowTrip button")
    const id = parseInt(e.target.id)
    const trip = await fetch('http://localhost:9292/trips/' + id, {
      credentials: 'include'
    })
    const response = await trip.json()
    this.setState({
      
      showNewTrip: false,
      showTripsIndex: false,
      showEditTrip: false,
      tripShow: true,
      tripToShow: response.trip,
      flightToShow: response.flight,
      hotelToShow: response.hotel
    })
  }

  closeShowTrip = () => {
    this.setState({
      showTripsIndex:true,
      showNewTrip: false,
      showEditTrip: false,
      tripShow: false
    })
  }

  navigateToIndex = (e) => {
    // console.log("button is clikkked");
    this.setState({
      showNewTrip:false,
      tripShow: false,
      showEditTrip: false,
      showTripsIndex: true
    })
  }

  getTheTripToEdit = async () => {
    const id = this.state.editedTripId;
    console.log(id, 'this is id in getthetriptoedit');
    console.log(this.editedTripId);
    const tripJson = await fetch('http://localhost:9292/trips/' + id, {
      credentials: 'include'
    });

    const trip = await tripJson.json();
    console.log(trip.trip);
    console.log(trip.flight);
    console.log(trip.outbound);
    console.log(trip.inbound);
    this.setState({
      tripToEdit: trip
    })
  }

  renderEditTripForm = async (e) => {
    const id = e.currentTarget.previousSibling.previousSibling.id;
    console.log(id, 'this is id in renderEditTripForm');
    console.log(e.currentTarget.previousSibling);

    const tripJson = await fetch('http://localhost:9292/trips/' + id, {
      credentials: 'include'
    });
    const trip = await tripJson.json();
    console.log(id, 'this is id in render edit trip form');
    this.setState({
      showEditTrip: true,
      showNewTrip: false,
      showTripsIndex: false,
      editedTripId: id,
      tripToEdit: trip
    });
  }

  render(){
    return (
      <div className="App">
        {this.state.loggedIn ?

          <div className="container">
            <div className="row">
              <div className="twelve columns">
                <h1 className="header">Shoestring!</h1>
              </div>
            </div>

              <div className="row">
                <div className="twelve columns">
                  <br />
                </div>
              </div>

            <div className="row">
              <div className="twelve columns">
                <Navbar renderAddNewTripForm={this.renderAddNewTripForm} showNewTrip={this.state.showNewTrip} navigateToIndex={this.navigateToIndex} logout={this.logout}/>
              </div>
            </div>

            <div className="row">
              <div className="twelve columns">
                <br />
                <br />
                <br />
              </div>

            </div>


            <div className="row">
              <div className="four columns">
                <UserSidebar username={this.state.username} name={this.state.name} photo={this.state.photo} openModal={this.openModal}/>
                <UserEditModal openModal={this.state.openModal} closeModal={this.closeModal} user_id={this.state.user_id} user_name={this.state.name} username={this.state.username} photo={this.state.photo} editUser={this.editUser} userEditError={this.state.userEditError}/>
              </div>

              <div className="eight columns">
              <AllTripsContainer showNewTrip={this.state.showNewTrip} showEditTrip={this.state.showEditTrip} editedTripId={this.state.editedTripId} tripToEdit={this.state.tripToEdit} showTripsIndex={this.state.showTripsIndex} renderEditTripForm={this.renderEditTripForm} openShowTrip={this.openShowTrip} tripToShow={this.state.tripToShow} hotelToShow={this.state.hotelToShow} flightToShow={this.state.flightToShow} getTheTripToEdit={this.getTheTripToEdit}/>
              </div>
            </div>

          </div>

          : <LoginRegister login={this.login} register={this.register} loginError={this.state.loginError} logout={this.logout}/>
        }

      </div>
    )
  }
}

export default App;
