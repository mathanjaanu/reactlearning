import React, { Component } from "react";
// import { useState, useEffect } from "react";
// import { Link } from 'react-router-dom';
// import $ from "jquery";
export default class postinglocal extends Component {


    constructor(props) {
        super(props);
        this.state = {
            id: "",
            first_name: "",
            last_name: "",
            email: "",
        }
    }

    submitted = event => {
        event.preventDefault()
        console.log(this.state)

        // axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
        //     .then(response => {
        //         console.log("success" +response)
        //     })
        //     .catch(error => {
        //         console.log("rejext" +error)
        //     })


        fetch('http://localhost:3000/posts', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state)
        }).then(response => {
            console.log(response);

            console.log(response.status);

            if (response.status === 201) {
                this.setState({
                    successmsg: "successfully added"
                })
            }
            else if (response.status === 204 ) {
                this.setState({
                    successmsg: "Duplicated ID"
                })
            }
            else {
                this.setState({
                    successmsg: "Not added"
                })
            }

            // alert("successfully added")
        })
            .catch(error => {
                console.log(error);
            })


    }

    Changing = (event) => {
        console.log(event.target.value);
        this.setState({
            [event.target.name]: event.target.value
            // title : event.target.value
        })
    }


    // componentDidMount() {




    // }

    render() {
        const { id, first_name, last_name,email, successmsg } = this.state
        return (
            <div>

                {/* <p>My Name= {userId}</p>
                <p>My Mail = {title}</p> */}
                <form className="col-md-6 col-md-offset-3 text-left" onSubmit={this.submitted}>

                    <div class="form-group">
                        <label for="name">id:</label>
                        <input type="text" 
                            className="form-control"
                            id="name"
                            placeholder="Enter Name"
                            name="id"
                            onChange={this.Changing}
                            value={id}
                            required
                        />
                    </div>

                    <div class="form-group">
                        <label for="title">first_name:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            placeholder="Enter title"
                            name="first_name"
                            onChange={this.Changing}
                            value={first_name}
                            required
                        />
                    </div>


                    <div class="form-group">
                        <label for="body">last_name:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="body"
                            placeholder="Enter body"
                            name="last_name"
                            onChange={this.Changing}
                            value={last_name}
                            required
                        />
                    </div>

                    <div class="form-group">
                        <label for="body">email:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="email"
                            placeholder="Enter body"
                            name="email"
                            onChange={this.Changing}
                            value={email}
                            required
                        />
                    </div>


                    <button type="submit" className="btn btn-default">Submit</button>

                    <p>{successmsg}</p>
                </form>

            </div>
        )
    }



    componentDidMount() {


    }



}