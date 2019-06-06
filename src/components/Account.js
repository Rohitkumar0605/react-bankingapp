import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import swal from 'sweetalert';

class Account extends Component {
    constructor(props) {
        super(props);
        this.state = {
          submitddata: {
              firstName : "",
              lastName: "",
              pancard:"",
              emailId:"",
              contactNumber:""
          }
         
        }
      }
  submit = (event) =>{
      event.preventDefault();
    const {submitddata}=this.state;
    return new Promise((resolve, reject) => {
      axios.post(`http://192.168.43.22:8090/app/createAccount`,submitddata).then(function (response) {
        resolve(response);
        swal(`Details submitted Successfully!`,"Done", "success")
        window.location.href = "http://localhost:3000/login";
      }).catch(function (error) {
        reject(error);
      });
    });
    
  }
  submitHandler = (event)=>{
    const {submitddata}=this.state;
    submitddata[event.target.name]=event.target.value;
    this.setState({submitddata});
    console.log(submitddata,"name");
  }
   render() {
    return (
      <div className="container acc">
          <form>
              <div className="form-group">
                  <label>First Name:</label>
                  <input type="text" className="form-control"  placeholder="First name" name="firstName" onChange={this.submitHandler}/>
              </div>
              <div className="form-group">
                  <label>Last Name:</label>
                  <input type="text" className="form-control"  placeholder="Last name" name="lastName" onChange={this.submitHandler}/>
              </div>
              <div className="form-group">
                  <label>Pan Card:</label>
                  <input type="text" className="form-control" placeholder="Pan Card" name="pancard" onChange={this.submitHandler}/>
              </div>
              <div className="form-group">
                  <label>Email Id:</label>
                  <input type="email" className="form-control"  placeholder="Email Id" name="emailId" onChange={this.submitHandler}/>
              </div>
              <div className="form-group">
                  <label>contact Number:</label>
                  <input type="number" className="form-control"  placeholder="Contact Number" name="contactNumber" onChange={this.submitHandler}/>
              </div>
              <div>
                  <button onClick={this.submit}>save</button>
                  <button type='reset'>Reset</button>
              </div>
          </form>
      </div>
    )
  }
}
export default Account;

