import React, { Component } from "react";
// import { useState, useEffect } from "react";
// import { Link } from 'react-router-dom';
// import $ from "jquery";
export default class Login extends Component {


    constructor(props) {
        super(props);
        // this.state = {

        //     user: "mathan",
        //     pass: "",
        // }
    }


    

    login = event => {
        event.preventDefault();

        var user = "mathan";
        var pass = "123";
var items = [];
var items2 = [];


        fetch('http://localhost:3001/employees.json')
        .then(response => response.json())
        .then(json => {
            this.setState({
                isloaded: true,
                items: json,
            })
            console.log(json.employees);

           items2 = json.employees.map(item => (
                item.first_name          
                ))

                // checking();
                console.log(items2.length);


                // for(var i=0 ;i < items2.length;i++){
                //     console.log(items2[i]);

                //     if (document.getElementById('username').value === items2[i]) {
                //         if (document.getElementById('password').value === pass) {
                //             localStorage.setItem("login", user);
                //             window.location.href = "/home";
                //             // localStorage.setItem("login", "Mathan");
                //         } 
                //         else{
                //             alert('Wrong password');
                //         }
                //     } 
                //     else {
                //         alert('Wrong Username');
                //       return false;
                //     }

                // }
        })

        
        // console.log(items2[0]);

        if (document.getElementById('username').value === "mathan") {
            if (document.getElementById('password').value === pass) {
                sessionStorage.setItem("login", user);
                window.location.href = "/home";
                // localStorage.setItem("login", "Mathan");
            } 
            else{
                alert('Wrong password');
            }
        } 
        else {
            alert('Wrong Username');
          return false;
        }

    }

    render() {
        return (

            <form className="login" onSubmit={this.login}>
                <h1>Login </h1>
                <div className="col-md-12 form-group">
                    {/* <label for="name">UserName:</label> */}
                    <input type="text" className="form-control" id="username" placeholder="Username" required />
                </div>

                <div className="col-md-12 form-group">
                    {/* <label for="title">Password:</label> */}
                    <input type="password" className="form-control" id="password" placeholder="Password" required />
                </div>

                <button type="submit" className="btn btn-default">Login</button>

            </form>

        )
    }





}