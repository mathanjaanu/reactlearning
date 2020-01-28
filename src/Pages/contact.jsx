import React, { Component } from "react";
// import { useState, useEffect } from "react";
// import { Link } from 'react-router-dom';
// import $ from "jquery";
export default class Contact extends Component {


    constructor(props) {
        super(props);
        this.state = {
            fullemail: "",
            fullname: ""
        }
    }

    submitted = (event) => {
        event.preventDefault()
       alert(this.state.fullemail)
    }

    Changing = (event) => {
        console.log(event.target.value);
        this.setState({
            [event.target.name]: event.target.value

            // fullemail : event.target.value
        })
    }


    render() {
        const { fullemail, fullname } = this.state
        return (
            <div>

                <p>My Name= {fullname}</p>
                <p>My Mail = {fullemail}</p>
                <form class="col-md-6 col-md-offset-3 text-left" onSubmit={this.submitted}>

                    <div class="form-group">
                        <label for="name">Name:</label>
                        <input type="text"
                            class="form-control"
                            id="name"
                            placeholder="Enter Name"
                            name="fullname"
                            onChange={this.Changing}
                            value={fullname}
                        />
                    </div>

                    <div class="form-group">
                        <label for="email">Email:</label>
                        <input
                            type="email"
                            class="form-control"
                            id="email"
                            placeholder="Enter email"
                            name="fullemail"
                            onChange={this.Changing}
                            value={fullemail}
                        />
                    </div>
                    <button type="submit" class="btn btn-default">Submit</button>
                </form>

            </div>
        )
    }



    componentDidMount() {

    }



}