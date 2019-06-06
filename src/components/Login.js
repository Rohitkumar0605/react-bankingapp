import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import swal from 'sweetalert';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
          formdata: {
            userName : "",
            password: ""
        }
        }
      }
    
      login=(event)=>{
        event.preventDefault();
          const {logindata,formdata}=this.state;
        //   console.log(this.state.logindata, this.state.logindata[0],this.state.logindata[1])
          return new Promise((resolve, reject) => {
            axios.get(`http://192.168.43.22:8090/app/loginUser/${this.state.formdata.userName}/${this.state.formdata.password}`).then(function (response) {
              resolve(response);
              if(response.data.actionMessage =="success"){
                window.location.href = "http://localhost:3000/home";
              }
              else{
                alert("user is not valid");
              }
            }).catch(function (error) {
              reject(error);
            });
          }); 
      }
  loginHandler = (event)=>{
    const {formdata}=this.state;
    formdata[event.target.name]=event.target.value;
    this.setState({formdata});
    console.log(this.state.formdata, "name");
  }
   render() {
    return (
      <div className="header ">
          <h1 align="center" className='text-danger'>Customer Login</h1>
          <form className='container'>
              <div className="form-group">
                  <label>User Name:</label>
                  <input type="text" className="form-control"  placeholder="User Name" name="userName" onChange={this.loginHandler}/>
              </div>
              <div className="form-group">
                  <label>Last Name:</label>
                  <input type="password" className="form-control"  placeholder="Password" name="password" onChange={this.loginHandler}/>
              </div> 
              <div>
                  <button onClick={this.login}>Login</button>
                  <button type='reset'>Reset</button>
              </div>
          </form>
      </div>
    )
  }
}
export default Login;

