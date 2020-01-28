import React, { Component } from "react";
// import { Link } from 'react-router-dom';
// import $ from "jquery";
export default class Buynow extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isloaded: false,
            cartvalue:0,
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
    
    clicking = (event) =>{
 
        this.setState({
            cartvalue :  [event.target.value]
        })
        setTimeout(() => {
            alert(this.state.cartvalue);
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
                    
                    
                
                {items.map(item => (
                    <p className="sep">
                    <p>{item.employee_name}</p>
                    {item.employee_salary} <br/>
                    <button value={item.employee_salary} onClick={this.clicking}>Buy Now</button>
                    </p>
                    ))};
                    
                    </div>
                    )
                }
            }
        }