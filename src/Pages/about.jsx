import React, { Component } from "react";
import { Link } from 'react-router-dom';
import $ from "jquery";
export default class About extends Component {


    constructor(){
        super();
        this.state = { 
            title:"welcome",
        };
        
    }

    good() {
        console.log('JavaScript is Working');
    }
    popup() {
        alert('Click is Working');
    }
    handleClick = () => {
        console.log("es6 function");
    }
    render() {
        return (
            <div>



                <div id="myCarousel" className="carousel slide" data-ride="carousel" title={this.state.title}>
                    <ol class="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                    </ol>


                    <div class="carousel-inner">
                        <div className="item active">
                            <img src="https://ittisa.com/wp-content/uploads/2017/07/banner-11.png" alt="Los Angeles" />
                        </div>
                        <div className="item">
                            <img src="https://ittisa.com/wp-content/uploads/2017/07/banner-11.png" alt="Chicago" />
                        </div>
                        <div className="item">
                            <img src="https://ittisa.com/wp-content/uploads/2017/07/banner-11.png" alt="New York" />
                        </div>
                    </div>

                    <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                        <span className="glyphicon glyphicon-chevron-left"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a class="right carousel-control" href="#myCarousel" data-slide="next">
                        <span className="glyphicon glyphicon-chevron-right"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>



                <div className="container">
                    <div className="row">
                        <div class="col-sm-4">
                            <h3>Column 1</h3>
                            <p>Lorem ipsum dolor..</p>
                        </div>
                        <div className="col-sm-4">
                            <h3>Column 2</h3>
                            <p>Lorem ipsum dolor..</p>
                        </div>
                        <div className="col-sm-4">
                            <h3>Column 3</h3>
                            <p>Lorem ipsum dolor..</p>
                        </div>
                    </div>
                </div>

                {this.good()}

                <Link className="a" to="/home"> Anger Tag</Link>
                <button onClick={this.popup}> Click me </button>
                <img className="banner-img" src="https://ittisa.com/wp-content/uploads/2017/07/banner-11.png" rounded alt="d" />
            </div>
        )
    }



    componentDidMount() {
        $(".a").click(function () {

            // alert("JQuery is Woriking");
            // $(this).fadeOut();
        });
    }



}