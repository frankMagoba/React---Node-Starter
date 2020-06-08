import React, { Component } from 'react';
import Toast from 'light-toast';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";


class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ' ',
            password: ' '
        };
    }

    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                    <div className="container">
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/sign-in"}>Logout</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="container-fluid row">
                    <div className="col-4">
                        <Button variant="outline-success"><a href="/loan">Apply Loan</a></Button>
                    </div>
                    <div className="col-4">
                    </div>
                    <div className="col-4">
                        <Button variant="outline-secondary">View reports</Button>
                    </div>
                </div>
            </>
        );
    }
}

export default Dashboard;