import React, { Component } from "react";
import request from 'superagent';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import Cookies from 'universal-cookie';
import 'react-notifications/lib/notifications.css';



class Login extends Component {
  constructor(props) {
    super(props); 
    
   this.state ={
       userdata: '',
       redirect:'',
       redirectionUrl:'',
    }
    
  }
  componentDidMount() {
   const cookies = new Cookies();
   console.log("bbgg",cookies.get('userdata'));
     if(typeof cookies.get('userdata') !== "undefined"){
       window.location.href=this.props.redirectionUrl;

     }
     console.log("hfhd",this.props.redirectionUrl)
  
    }

handleSubmit = (event) => {
  event.preventDefault();
  var data={
   
    email:event.target[0].value,
    password:event.target[1].value,
  }
  
     var url = "http://localhost/Authapi/login.php";

     var data = JSON.stringify({ 
                                email:data.email,
                                password:data.password,
            
                                });
    console.log("data1",data);
    let apiResponce = request.post(url).field('data',data);

                
    apiResponce.end((err, response) => {
         if (err) {
           console.error(err);
         }
            console.log('api',response)   

         if (response.text !== '') {
          // alert('kgf')
            var responceData = JSON.parse(response.text);
            console.log('api',responceData)   
              if(responceData.type == "error"){
                   NotificationManager.error(responceData.message, 'Error', 3000);
                } 

            else{
                
            console.log("datauser",responceData.data[0].email);
            // set cookies
            const cookies = new Cookies();
            cookies.set('userdata',responceData.data[0].email);
           // get cookies
            // var username1=cookies.get('userdata');
            
            console.log("id",this.props.redirectionUrl);
            window.location.href=this.props.redirectionUrl;
            
           
            }

         }
            
      }); 
 }
render ()
   {
      const { 
        redirectionUrl
    }= this.props;
    console.log(redirectionUrl,"llf")
    console.log("uuuuu",this.state.redirect)


return (
 <div>
   <NotificationContainer/>
   <div className="col-md-6">
      <form className="frm-style" onSubmit={this.handleSubmit}>
         <h2 style={{'textAlign':'center'}}>Login</h2>
         <div className="row" style={{'textAlign':'center'}}>
            <div className="col-md-4 div1-style" >
               <label for="lname">Email</label>
            </div>
            <div class="col-md-4 div-style">
               <input className="frm-input" name="user" type="email" required />
            </div>
         </div>
         <div className="row" style={{'textAlign':'center'}}>
            <div className="col-md-4 div-style" >
               <label for="lname">Password</label>
            </div>
            <div className="col-md-4 div-style">
               <input type="password" className="frm-input" name="user" required />
            </div>
         </div>
         <div className="row" style={{'textAlign':'center'}}>
            <input type="submit" className="frm-input point" name="user" required />
            <div className="col-md-4 div-center">
               <a href="/registration">Registration</a>
            </div>
         </div>
      </form>
   </div>
</div>
    );
 }
 
}
export default Login;