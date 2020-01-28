import React, { Component } from "react";
import { Link } from 'react-router-dom';

// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/scss/bootstrap.scss';

export default class HeaderComponent extends Component {
    render() {
        return (
            <div>

                <nav className="navbar navbar-inverse navbar-static-top"  >
                    <div className="container-fluid nav-tempus-home">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>  

                            <Link  to="/home" className="navbar-brand">
                                LOGo
                                 {/* <img src="http://tempuscapital.in/wp-content/uploads/2016/08/logo.png" className="logo-img" />  */}
                            </Link>
                        </div>
                        <div id="navbar" className="navbar-collapse collapse">
                            <ul className="nav navbar-nav ">
                                <li><Link to="/home">Home</Link></li>
                                <li><Link to="/about">About Us</Link></li>
                                <li><Link to="/states">States</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                                <li><Link to="/get">GET</Link></li>
                                <li><Link to="/getnew">GETnew</Link></li>
                                <li><Link to="/post">POST</Link></li>
                                <li><Link to="/login">Login</Link></li>
                                <li><Link to="/props">Props</Link></li>
                                <li><Link to="/postinglocal">Posting-LOCAL</Link></li>
                                <li><Link to="/buynow">Buy now</Link></li>

                                {/* <li><Link to="/home">Home</Link></li>
                                <li><Link to="/about">About Us</Link></li>
                                <li><Link to="/home">Home</Link></li>
                                <li><Link to="/about">About Us</Link></li> */}
                            </ul>
                        </div>
                    </div>
                </nav>


            </div>
        )
    }
}