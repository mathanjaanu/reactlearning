import React from "react";




// Parent Component 
export default class Parent extends React.Component{ 

    componentDidMount() {
        console.log("did mount");
    }
    
    componentWillMount() {
        console.log("will mount");
    }

    componentWillUnmount() {
        console.log("will unmount");
    }

    componentDidUpdate() {
        console.log("did update");
    }
    componentWillUpdate() {
        console.log("Will update");
    }
                
                    
    render(){ 
        return( 
                <div> 
                    <h2>You are inside Parent Component</h2> 
                    <Child name="Mathan" userId = "22"/> 
                </div> 
            ); 
    } 


} 
  
// Child Component 
class Child extends React.Component{ 
    render(){ 
        console.log(this.props); 
        return( 
                <div> 
                    <h2>Hello, {this.props.name}</h2> 
                    <h3>You are inside Child Component</h3> 
                    <h3>Your user id is: {this.props.userId}</h3> 
                </div> 
            ); 
    } 
} 
