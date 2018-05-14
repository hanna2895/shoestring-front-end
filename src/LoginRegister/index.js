import React, {Component} from "react";
import './style.css'

class LoginRegister extends Component{
	constructor(){
		super();
		this.state = {
			name: '',
			username: '',
			password: '',
			photo: '',
			registering: false
		}
	}
	registration = () => {
		this.setState({
			registering: true
		})
	}
	login = () => {
		this.setState({
			registering: false
		})
	}
	handleInput = (e) => {
		const field = e.currentTarget.name
		if(field == 'name') this.setState({ name: e.currentTarget.value })
		else if (field == 'username') this.setState({ username: e.currentTarget.value })
		else if (field == 'password') this.setState({ password: e.currentTarget.value })
		else this.setState({ photo: e.currentTarget.value })
	}
	handleSubmit = (e) => {
		e.preventDefault();
		if(this.state.registering) this.props.register(this.state.name, this.state.username, this.state.password, this.state.photo)
		else this.props.login(this.state.username, this.state.password)
	}
	render(){
		return(
			<div>
				<p><span className={this.state.registering ? "current" : null} onClick={this.registration}>Create new user</span><br></br><span className={this.state.registering ? null : "current"} onClick={this.login}>Login</span></p>
				<form onSubmit={this.handleSubmit}>
					<input className={this.state.registering ? null : 'hide'} type='text' name='name' placeholder='name' value={this.state.name} onChange={this.handleInput}/>
					<input type='text' name='username' placeholder='username' value={this.state.username} onChange={this.handleInput}/>
					<input type='password' name='password' placeholder='password' value={this.state.password} onChange={this.handleInput}/>
					<input className={this.state.registering ? null : 'hide'} type='text' name='photo' placeholder='photo' value={this.state.photo} onChange={this.handleInput}/>
					<button type='submit'>Submit</button>
				</form>
			</div>
		)
	}
}

export default LoginRegister;