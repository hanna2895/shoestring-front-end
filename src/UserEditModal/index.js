import React, {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, Input, Container } from 'reactstrap';
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
		// console.log(this.state, 'This is edit modal staaaaaaaaate')
		// const modelCSS = this.props.modelState ? 'Edit-Modal-Open' : 'Edit-Modal-Closed'
		return(
			<Container>
				<Modal isOpen={this.props.openModal} className={this.props.className}>
          	<ModalHeader toggle={this.toggle}>
							<h2>Edit User</h2>
							<Button color="secondary" onClick={this.props.closeModal}>Cancel</Button>
						</ModalHeader>

          		<ModalBody>
            		<Form onSubmit={this.handleSubmit}>
									<Input type="text" placeholder="name" onChange={(e) => this.setState({ nameVal: e.target.value })}/>
        					<Input type="text" placeholder="username" onChange={(e) => this.setState({ usernameVal: e.target.value })}/>
        					<Input type="text" placeholder="photo" onChange={(e) => this.setState({ photoVal: e.target.value })}/>
  								<Input type="password" placeholder="password" onChange={(e) => this.setState({ passwordVal: e.target.value })}/>
      					<Button color="primary">Submit</Button>
							</Form>
							{this.props.userEditError != '' ? <p>{this.props.userEditError}</p> : null}

        	</ModalBody>
    		</Modal>
			</Container>
	)}
}
export default UserEditModal;
