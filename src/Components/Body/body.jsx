import React, { Component ,hashHistory} from "react";
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";


import HeaderComponent from './../Header/header.jsx';
import FooterComponent from './../Footer/footer.jsx';

import About from './../../Pages/about.jsx';
import Home from './../../Pages/home.jsx';
import Allstates from '../../Pages/allstates';
import Contact from '../../Pages/contact';
import getMethod from '../../Pages/get';
import getMethodnew from '../../Pages/get-new';
import postMethod from '../../Pages/post';
import Login from '../../Pages/login';
import Parent from '../../Pages/props.jsx';
import postinglocal from "../../Pages/posting.jsx";
import Buynow from "../../Pages/buynow.jsx";


export default class BodyComponent extends Component {
    render() { 
        return (
            <div>
                
                <Router history={hashHistory} >
                    <HeaderComponent />
                        <Switch>
                        <Route exact path="/" component={Contact} />
                        <Route path="/Home" component={Home} />
                        <Route path="/About" component={About} />
                        <Route path="/States" component={Allstates} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/get" component={getMethod} />
                        <Route path="/getnew" component={getMethodnew} />
                        <Route path="/post" component={postMethod} />
                        <Route path="/login" component={Login} />
                        <Route path="/props" component={Parent} />
                        <Route path="/postinglocal" component={postinglocal} />
                        <Route path="/buynow" component={Buynow} />

                        </Switch>
                 <FooterComponent /> 
                </Router>
            </div>
        )
    }
}