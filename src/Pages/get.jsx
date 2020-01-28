import React, { Component } from "react";
// import { Link } from 'react-router-dom';
// import $ from "jquery";
export default class getMethod extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isloaded: false,
        }
    }

    

    componentWillMount() {

        // fetch('http://dummy.restapiexample.com/api/v1/employees')
        //     .then(res => res.json())
        //     .then(json => {
        //         this.setState({
        //             isloaded : true,
        //             items: json,
        //         })
        //     });


        // fetch('http://dummy.restapiexample.com/api/v1/employees')
        fetch('http://localhost:3001/employees.json')
            .then(response => response.json())
            .then(json => {
                this.setState({
                    isloaded: true,
                    items: json,
                })
                console.log(json)
            })

    }

    render() {

        var { isloaded, items } = this.state;

        if (!isloaded) {
            return <p>Loading...</p>
        }
        else {
            return (
                <div>



                   
                        {
                          console.log(items.employees)
                        }

                        {items.employees.map(item => (
                            <li>
                                id = {item.id} <br></br>  | {item.email} |{item.first_name} |{item.last_name}
                            </li>
                        ))};
                    

                                       {/* {a = items.map((number) => (
                         <li className="sep-product">
                         <p>{number.employee_name}</p>
                         <p>{number.employee_salary}</p>
                         <button className="add-cart">Add</button>
                      </li>
                    ))}
                    

                    {/* <ul>
                        {items.map(item => (
                            <li>
                                {item.employee_name}  | {item.employee_salary}
                            </li>
                        ))};
                    </ul> */}


                </div>
            )
        }
    }
}