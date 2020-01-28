import React, { Component } from "react";
import Bangalore from "./../Indiastates/bangalore";
import Delhi from "./../Indiastates/delhi.jsx";
import $ from "jquery";

// export default class Allstates extends Component {

// all = () => {
//     return (
//         <Bangalore />,
//         <Delhi />,
//         alert("a")
//     )
// }
//     render() {
//         return (
//             <div>
//                 <p>All States</p>
//                 {/* <Bangalore />
//                 <Delhi /> */}

//                <ul>
//                     <li onClick={this.all}>All States</li>
//                     <li onClick={this.delhi}>Delhi</li>
//                     <li onClick={this.bangalore}>Bangalore</li>
//                 </ul>

//            </div>



//         )
//     }   
// }




export default class Allstates extends Component {
    // export default class Allstates extends Component {


    // constructor(){

    // }
    componentDidMount() {
        // $(window).on("load", function () {
            $(".all").trigger("click");
        // });


    }


    state = { answer: '' }
    handleSubmit = (event) => {
        this.setState({ answer: event.target.className });
        // this.addClass("active");
        document.getElementById("mainstates").innerHTML = event.target.className;
        document.getElementById("namestate").classList.remove('active');
        // this.classList.toggle('active');
    }

    stateclicked = () => {
        // alert("clicked");
        document.getElementById("namestate").classList.toggle('active');
    }

    closing = () => {
        // alert("clicked");
        document.getElementById("namestate").classList.toggle('active');
    }

    render() {
        return (
            <div>


                <p id="mainstates" onClick={this.stateclicked}>All</p>


                <section id="namestate">
                    <button onClick={this.handleSubmit} className="bangalore">Bangalore</button>
                    <button onClick={this.handleSubmit} className="delhi">Delhi</button>
                    <button  onClick={this.handleSubmit} className="all">All</button>


                </section>


                <div className="selectedone">
                    {this.state.answer === "bangalore" &&
                        <Bangalore />
                    }
                    {this.state.answer === "delhi" && <Delhi />}
                    {this.state.answer === "all" && <Delhi />}
                    {this.state.answer === "all" && <Bangalore />}

                </div>
            </div>
        )
    }
}