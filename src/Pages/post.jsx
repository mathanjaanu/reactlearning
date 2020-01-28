import React, { Component } from "react";
// import { useState, useEffect } from "react";
// import { Link } from 'react-router-dom';
// import $ from "jquery";
export default class postMethod extends Component {


    constructor(props) {
        super(props);
        this.state = {
            title: "",
            userId: "",
            body: "",
            successmsg: "",
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


        fetch('https://jsonplaceholder.typicode.com/posts', {
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
        const { title, userId, body, successmsg } = this.state
        return (
            <div>

                <p>My Name= {userId}</p>
                <p>My Mail = {title}</p>
                <form className="col-md-6 col-md-offset-3 text-left" onSubmit={this.submitted}>

                    <div class="form-group">
                        <label for="name">Name:</label>
                        <input type="text" 
                            className="form-control"
                            id="name"
                            placeholder="Enter Name"
                            name="userId"
                            onChange={this.Changing}
                            value={userId}
                            required
                        />
                    </div>

                    <div class="form-group">
                        <label for="title">title:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            placeholder="Enter title"
                            name="title"
                            onChange={this.Changing}
                            value={title}
                            required
                        />
                    </div>


                    <div class="form-group">
                        <label for="body">body:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="body"
                            placeholder="Enter body"
                            name="body"
                            onChange={this.Changing}
                            value={body}
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