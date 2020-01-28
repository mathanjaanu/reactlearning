import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class FooterComponent extends Component {
    render() {
        return (
            <div>

                <nav className="navbar navbar-inverse custom-foot">
                    <div className="container-fluid nav-tempus-home">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                        </div>
                        <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav ">
                                <li><Link to="/home">Home</Link></li>
                                <li><Link to="/about">About Us</Link></li>
                                {/* <li><Link to="/home">Home</Link></li> */}
                                {/* <li><Link to="/about">About Us</Link></li>
                                <li><Link to="/home">Home</Link></li>
                                <li><Link to="/about">About Us</Link></li> */}
                            </ul>
                        </div>
                    </div>
                </nav>
                <p>Footer It Will come </p>
            </div>
        )
    }
}