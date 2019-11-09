import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';

import Login from "./ibrAuth/Login";

class App extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      
      };
  }
   render() {

  return (
    <div className="App">
    <Login redirectionUrl="/profile" />
      
    </div>
   )};  

}
 

export default App;
