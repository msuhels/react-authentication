import React, { Component } from "react";
import {
  Route,
  BrowserRouter
} from "react-router-dom";

import Login from "./ibrAuth/Login";
import Registration from "./ibrAuth/Registration";
import Profile from "./ibrAuth/Profile";
import App from './App';



class Main extends Component {
  
  render() {
    return (
      <BrowserRouter>
        <div>
          <div className="content"> 
                <Route exact path="/" component={App}/> 
                <Route exact path="/registration" component={Registration}/> 
                <Route exact path="/profile" component={Profile}/> 


          </div>
          
        </div>
        </BrowserRouter>
    );
  }
}
 
export default Main;