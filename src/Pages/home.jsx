import React, { Component } from "react";
import $ from "jquery";

import circle from "./images/1.png";

import icon1 from "./images/2.png";
import icon1new from "./images/3.png";
import icon1change from "./images/11.gif";

import icon2 from "./images/2.png";
import icon2new from "./images/3.png";
import icon2change from "./images/12.gif";

import icon3 from "./images/2.png";
import icon3new from "./images/3.png";
import icon3change from "./images/13.gif";

import icon4 from "./images/2.png";
import icon4new from "./images/3.png";
import icon4change from "./images/14.gif";

import icon5 from "./images/2.png";
import icon5new from "./images/3.png";
import icon5change from "./images/13.gif";

export default class Home extends Component {

    constructor(props) {
        super(props);
        // this.state = {

        //     user: "mathan",
        //     pass: "",
        // }
        // console.log(localStorage.getItem("login"));
alert("login as " + sessionStorage.getItem("login"));
        setTimeout(function(){
            sessionStorage.removeItem("login");
        })
    }


    render() {
        return (




            <div className="aa" id={this.setState.title}>



                <div className="animations">
                    <div className="container">


                        <div className="inner-icons">
                            <img src={circle} className="ico" alt="dummy" />


                            <div class="progresss">
                                <img src={icon1} data-src={icon1new} data-old={icon1} data-gif={icon1change} class="common-img two" alt="dummy" />
                            </div>
                            <div class="progresss">
                                <img src={icon2} data-src={icon2new} data-old={icon2} data-gif={icon2change} class="common-img three" alt="dummy" />
                            </div>
                            <div class="progresss">
                                <img src={icon3} data-src={icon3new} data-old={icon3} data-gif={icon3change} class="common-img four" alt="dummy" />
                            </div>
                            <div class="progresss">
                                <img src={icon4} data-src={icon4new} data-old={icon4} data-gif={icon4change} class="common-img five" alt="dummy" />
                            </div>
                            <div class="progresss">
                                <img src={icon5} data-src={icon5new} data-old={icon5} data-gif={icon5change} class="common-img six" alt="dummy" />
                            </div>

                            <div class="common-text second">
                                <h1>Hello one</h1>
                            </div>
                            <div class="common-text third">
                                <h1>Hello Two</h1>
                            </div>
                            <div class="common-text fourth">
                                <h1>Hello Three</h1>
                            </div>
                            <div class="common-text fifth">
                                <h1>Hello Four</h1>
                            </div>
                            <div class="common-text sixth">
                                <h1>Hello Five</h1>
                            </div>


                            <div class="middle-img">
                                <img src={icon4change} class="common-gif gif-1" alt="f" />

                            </div>

                        </div>
                    </div>
                </div>
<br />
<br />
<br />
<br />
<br /><br />
<br />
<br />
<br />
<br />


                <div class="container-fluid text-center">
                    <div class="row content">
                        <div class="col-sm-2 sidenav">
                            <p><a href="https://google.com">Link</a></p>
                            <p><a href="https://google.com">Link</a></p>
                            <p><a href="https://google.com">Link</a></p>
                        </div>
                        <div class="col-sm-8 text-left">
                            <h1>Welcome</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <hr />
                            <h3>Test</h3>
                            <p>Lorem ipsum...</p>
                        </div>
                        <div class="col-sm-2 sidenav">
                            <div class="well">
                                <p>ADS</p>
                            </div>
                            <div class="well">
                                <p>ADS</p>
                            </div>
                        </div>



                        <footer class="container-fluid text-center">
                            <p>Footer Text</p>
                        </footer>
                    </div>
                </div>
                <div className="container-fluid home-page">
                    <img className="banner-img" src="https://ittisa.com/wp-content/uploads/2017/07/banner-11.png" alt="a" />
                </div>


            </div>

        )
    }



    componentDidMount() {


        $(window).on("load",function() {
            $("img.common-img.two").trigger("click");
        });


        $(document).ready(function () {
            $(".inner-icons > div img").on("click", function () {

                var gif = $(this).data("gif");

                setTimeout(function () {
                    $(".gif-1").css({ "opacity": "0", "transition": "0.25s" });
                    setTimeout(function () {
                        $(".gif-1").css({ "opacity": "1", "transition": "0.5s" });
                    }, 500);
                }, 250);


                setTimeout(function () {
                    $(".gif-1").attr("src", gif).fadeIn(500);;
                }, 500);

                var old = $(this).data("old");
                $(".common-img").removeClass("active");
                $(this).addClass("active");
                $(".common-img").attr("src", old);
                var source = $(this).data("src");
                $(this).attr("src", source);
            });


            $(".common-img.two").on("click", function () {
                $(".third,.fourth,.fifth,.sixth").fadeOut(500);
                $(".second").fadeIn(500);
            });
            $(".common-img.three").on("click", function () {
                $(".second,.fourth,.fifth,.sixth").fadeOut(500);
                $(".third").fadeIn(500);
            });
            $(".common-img.four").on("click", function () {
                $(".second,.third,.fifth,.sixth").fadeOut(500);
                $(".fourth").fadeIn(500);
            });
            $(".common-img.five").on("click", function () {
                $(".second,.third,.fourth,.sixth").fadeOut(500);
                $(".fifth").fadeIn(500);
            });
            $(".common-img.six").on("click", function () {
                $(".second,.third,.fourth,.fifth").fadeOut(500);
                $(".sixth").fadeIn(500);
            });
        });

        var timings = 1;
        function updateClass() {
            let active_img = $(".common-img.active");
            active_img.removeClass("active");
            active_img = active_img.parent().next(".progresss");
            if (active_img.length === 0)
                active_img = $(".progresss").first();
            active_img.find(".common-img").addClass("active");

            $(".common-img.active").trigger("click");

        }

        $(document).ready(function () {
            setInterval(function () {
                updateClass();
            }, timings * 7000);
        });


    }
}