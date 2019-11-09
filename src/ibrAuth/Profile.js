import React, { Component } from "react";
import request from 'superagent';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import Cookies from 'universal-cookie';
import 'react-notifications/lib/notifications.css';



class Profile extends Component {
  constructor() {
    super();
   this.state ={
       userdata: '',
    }
    
  }
  componentDidMount() {
   const cookies = new Cookies();
   console.log("bbgg",cookies.get('userdata'));
   var session =cookies.get('userdata');
     if(typeof cookies.get('userdata') == "undefined" ){
       window.location.href="/";
       console.log('hfjdf')

     }
    }
  logOut()
{ 
   
   const cookies = new Cookies();
   cookies.remove('userdata');
   console.log("cc",cookies.get('userdata'));
   window.location.href="/";
   // this.setState({redirectToLogin: true});
}

render ()
   {
return (
  <div>
      <div className="row">
       
        <h2 style={{'textAlign':'center'}}>hello</h2>
        <div style={{'textAlign':'center'}}>
        <button onClick={this.logOut.bind(this)} className="point">Logout</button>
        </div>
      </div>
  </div>
    );
 }
 
}
export default Profile;