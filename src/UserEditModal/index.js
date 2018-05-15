import React, {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './style.css'

class UserEditModal extends Component{
	constructor(props) {
    	super(props);
    	this.state = {
    		nameVal: '',
    		usernameVal: '',
    		passwordVal: '',
    		photoVal: ''
    	}
  	}
  	componentWillReceiveProps(nextProps){
  		this.setState({
			nameVal: nextProps.user_name,
			usernameVal: nextProps.username,
			photoVal: nextProps.photo
		})
	}
	handleSubmit = (e) => {
		e.preventDefault()
		this.props.editUser(this.state.nameVal, this.state.usernameVal, this.state.passwordVal, this.state.photoVal, this.props.user_id)
		this.setState({
			nameVal: '',
			usernameVal: '',
			passwordVal: '',
			photoVal: ''

		})
	}

	render(){
		console.log(this.state, 'This is edit modal staaaaaaaaate')
		// const modelCSS = this.props.modelState ? 'Edit-Modal-Open' : 'Edit-Modal-Closed'
		return(
			<Modal isOpen={this.props.modalState} className={this.props.className}>
          		<ModalHeader toggle={this.toggle}>Edit User</ModalHeader>
          		<ModalBody>
            		<form onSubmit={this.handleSubmit}>
						<input type="text" placeholder="name" onChange={(e) => this.setState({ nameVal: e.target.value })}/>
						<br></br>
        				<input type="text" placeholder="username" onChange={(e) => this.setState({ usernameVal: e.target.value })}/>
        				<br></br>
        				<input type="text" placeholder="photo" onChange={(e) => this.setState({ photoVal: e.target.value })}/>
        				<br></br>
  						<input type="password" placeholder="password" onChange={(e) => this.setState({ passwordVal: e.target.value })}/>
  						<br></br>
      					<button>Submit</button>
					</form>
					{this.props.userEditError != '' ? <p>{this.props.userEditError}</p> : null}
          		</ModalBody>
        	</Modal>
		)
	}
}
export default UserEditModal;