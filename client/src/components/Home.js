import React, { Component } from 'react';
import Toast from 'light-toast';


class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: ' ',
			password: ' '
		};
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	onSubmit = (e) => {
		e.preventDefault();
		const form = {
			username: this.state.username,
			password: this.state.password
		}
		console.log(form);
		Toast.info('Signing in...', 3000, () => {
			// do something after the toast disappears
		});
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(form)
		};
		fetch('http://localhost:4000/users/authenticate', requestOptions)
			.then(response => {
				response.status === 200 ? Toast.info('Successfully logged in...', 3000, () => {
					window.location = "/dashboard"
				}) : Toast.info("error");
			})
			.then(data => console.log(data));
	}

	render() {
		return (
			<form>
				<h3>Sign In</h3>

				<div className="form-group">
					<label>User name</label>
					<input type="email" className="form-control" placeholder="Enter user name" name='username'
						value={this.state.username}
						onChange={e => this.handleChange(e)} />
				</div>

				<div className="form-group">
					<label>Password</label>
					<input type="password" className="form-control" placeholder="Enter password" name='password'
						value={this.state.password}
						onChange={e => this.handleChange(e)} />
				</div>

				<div className="form-group">
					<div className="custom-control custom-checkbox">
						<input type="checkbox" className="custom-control-input" id="customCheck1" />
						<label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
					</div>
				</div>

				<button type="submit" className="btn btn-primary btn-block" onClick={(e) => this.onSubmit(e)}
				>Submit</button>
				<p className="forgot-password text-right">
					Register <a href="/sign-up">New user?</a>
				</p>
			</form>
		);
	}
}

export default Home;