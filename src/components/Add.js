import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import swal from 'sweetalert';

class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
          addpayee: {
            payeeNameDto: "",
            branchDto: "",
            accountNumberDto:"",
            accountTypeDto:"",
          },
          validateOtp:""
         
        }
      }
      validateOtp =(event)=>{
        event.preventDefault();
        return new Promise((resolve, reject) => {
          axios.post(`http://192.168.43.22:8090/app/validateOtp/${this.state.validatingotp}`).then(function (response) {
            resolve(response);
          }).catch(function (error) {
            reject(error);
          });
        });
     }

      generateOtp =(event)=>{
        event.preventDefault();
        return new Promise((resolve, reject) => {
          axios.post('http://192.168.43.22:8090/app/generateOtp').then(function (response) {
            resolve(response);
            swal("otp!","submitted successfully", "success")
            var validatingotp = prompt("Please enter otp", "");
            console.log(validatingotp);
            this.validateOtp();
          }).catch(function (error) {
            reject(error);
          });
        });
     }
  add = (event) =>{
      event.preventDefault();
    const {addpayee}=this.state;
    return new Promise((resolve, reject) => {
      axios.post('http://192.168.43.22:8090/app/addPayee',this.state.addpayee).then(function (response) {
        resolve(response);
        swal(`Payee Added successfully!`,"", "success")
        this.props.history.push('./home')
      }).catch(function (error) {
        reject(error);
      });
    });
    
  }
  addHandler = (event)=>{
    const {addpayee}=this.state;
    addpayee[event.target.name]=event.target.value;
    this.setState({addpayee});
    console.log(addpayee,"name");
  }
   render() {
    return (
      <div className="header ">
          <h1 align="center" className='text-danger'>Add Payee</h1>
          <form className='container'>
              <div className="form-group">
                  <label>payeeName:</label>
                  <input type="text" className="form-control"  placeholder="payeeName" name="payeeNameDto" onChange={this.addHandler}/>
              </div>
              <div className="form-group">
                  <label>branch:</label>
                  <input type="text" className="form-control"  placeholder="branch" name="branchDto" onChange={this.addHandler}/>
              </div> 
              <div className="form-group">
                  <label>accountNumber:</label>
                  <input type="number" className="form-control"  placeholder="accountNumber" name="accountNumberDto" onChange={this.addHandler}/>
              </div>
              <div className="form-group">
                  <label> accountType:</label>
                  <select class="form-control" name="accountTypeDto" onChange={this.addHandler} >
                      <option name="accountType" onChange={this.addHandler}>savings</option>
                      <option name="accountType" onChange={this.addHandler}>current</option>
                      <option name="accountType" onChange={this.addHandler}>deposit</option>
                  </select>
              </div> 
              <div>
                  <button onClick={this.add}>Add payee</button>
                  <button type='reset'>Reset</button>
                  <button type='button' onClick={this.generateOtp}>Generate Otp</button>
              </div>
          </form>
      </div>
    )
  }
}
export default Add;

