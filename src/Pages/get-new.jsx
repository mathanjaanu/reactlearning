import React, { Component } from "react";
// import { Link } from 'react-router-dom';
// import $ from "jquery";
export default class getMethodnew extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isloaded: false,
        }
    }

    

    componentWillMount() {

        fetch('http://dummy.restapiexample.com/api/v1/employees')
            .then(response => response.json())
            .then(json => {
                this.setState({
                    isloaded : true,
                    items: json,
                })
                console.log(json)

            });
    }

    render() {

       var { isloaded, items } = this.state;
       items =  items.data;

        if (!isloaded) {
            return <p>Loading...</p>
        }

        else {
            return (
                <div>
                     {
                          console.log(items)
                        }
               loaded
               {items.map(item => (
                            <li>
                                Employee id = {item.id} | name :  {item.employee_name} | Salary : {item.employee_salary} <br/><br/>
                            </li>
                        ))};

                </div>
            )
        }
    }
}