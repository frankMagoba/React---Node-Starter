import React, { Component } from "react";
import Toast from 'light-toast';

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: ' ',
            lastName: ' ',
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
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            username: this.state.username,
            password: this.state.password
        }
        console.log(form);
        Toast.info('Registering...', 3000, () => {
            // do something after the toast disappears
        });
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form)
        };
        fetch('http://localhost:4000/users/register', requestOptions)
            .then(response => {
            response.status === 200 ? Toast.info('Successfully registered...', 3000, () => {
                window.location = "/sign-in"
            }) : Toast.info("error");
            })
            .then(data => console.log(data));
    }

    render() {
        return (
            <form>
                <h3> New User</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input
                        type="text"
                        name='firstName'
                        className="form-control"
                        value={this.state.firstName}
                        placeholder="First name"
                        onChange={e => this.handleChange(e)}
                    />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" name='lastName'
                        className="form-control" placeholder="Last name" value={this.state.lastName} onChange={e => this.handleChange(e)}
                    />
                </div>

                <div className="form-group">
                    <label>User name</label>
                    <input
                        type="email"
                        className="form-control"
                        name='username'
                        placeholder="Enter user name"
                        value={this.state.username}
                        onChange={e => this.handleChange(e)}
                    />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        name='password'
                        className="form-control"
                        placeholder="Enter password"
                        value={this.state.password}
                        onChange={e => this.handleChange(e)}
                    />
                </div>

                <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    onClick={(e) => this.onSubmit(e)}
                >
                    Sign Up
        </button>
                <p className="forgot-password text-right">
                    Already registered <a href="/sign-in">sign in?</a>
                </p>
            </form>
        );
    }
}
