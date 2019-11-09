import React, { Component } from "react";
import request from 'superagent';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import Cookies from 'universal-cookie';
import 'react-notifications/lib/notifications.css';



class Registration extends Component {
  constructor() {
    super();
   this.state ={
       open: false,
    }
    
  }
 handleSubmit(event) {
  event.preventDefault();
  var data={
    name:event.target[0].value,
    email:event.target[1].value,
    password:event.target[2].value,
  }
    console.log(data) ;
     var url = "http://localhost/Authapi/registration.php";

     var data = JSON.stringify({ name:data.name,
                                email:data.email,
                                password:data.password,
            
                                });
    console.log("data1",data);
    let apiResponce = request.post(url).field('data',data);

        apiResponce.end((err, response) => {
        console.log("dd",response.text);
        if (err) {
             console.error(err);
             NotificationManager.error(err, 'Error!',3000);
           }
        if (response.text != '')
        {
             var responceData = JSON.parse(response.text);
             console.log("msg",response.text);
             if(responceData.type == "error"){
                NotificationManager.error(responceData.message, 'Error', 3000);
             }
            else{
                NotificationManager.success(responceData.message, 'Done', 3000);
                window.location = "/";

             }
          }

    }); 

 }
  
render ()
   {
return (
 <div>
   <NotificationContainer/>
   <div className="row">
  
      <form className="frm-style" onSubmit={this.handleSubmit}>
         <h2 style={{'textAlign':'center'}}>Registration</h2>
         <div className="row" style={{'textAlign':'center'}} >
            <div class="col-md-4 div1-style" >
               <label className="frm-label">Name</label>
            </div>
            <div class="col-md-4 div-style">
               <input className="frm-input" name="user" type="text" required/>
            </div>
         </div>
         <div className="row" style={{'textAlign':'center'}}>
            <div class="col-md-4 div1-style" >
               <label className="frm-label">Email</label>
            </div>
            <div class="col-md-4 div-style">
               <input className="frm-input" name="email" type="email" required/>
            </div>
         </div>
         <div className="row" style={{'textAlign':'center'}}>
            <div class="col-md-4 div-style" >
               <label className="frm-label">Password</label>
            </div>
            <div class="col-md-4 div-style">
               <input className="frm-input" name="password" type="password" required/>
            </div>
         </div>
         <div className="row" style={{'textAlign':'center'}}>
            <input type="submit" className="frm-input point" name="user" />
            <div className=" div-center">
               <a href="/">Login</a>
            </div>
         </div>
      </form>
   </div>
</div>
    );
 }
 
}
export default Registration;