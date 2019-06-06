import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import swal from 'sweetalert';

class Dash extends Component {
    constructor(props) {
        super(props);
        this.state = {
          addpayee: {
            payeeName : "",
            branch: "",
            accountNumber:"",
            accountType:"",
            loginId:"",
            contactNumber:""
          }
         
        }
      }
  add = (event) =>{
      event.preventDefault();
    const {addpayee}=this.state;
    return new Promise((resolve, reject) => {
      axios.post('http://192.168.43.22:8090/app/addPayee',addpayee).then(function (response) {
        resolve(response);
        swal(`login Success!`,"Done", "success")
        this.props.history.push('./details')
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
                  <input type="text" className="form-control"  placeholder="payeeName" name="payeeName" onChange={this.addHandler}/>
              </div>
              <div className="form-group">
                  <label>branch:</label>
                  <input type="password" className="form-control"  placeholder="branch" name="branch" onChange={this.addHandler}/>
              </div> 
              <div className="form-group">
                  <label>accountNumber:</label>
                  <input type="text" className="form-control"  placeholder="accountNumber" name="accountNumber" onChange={this.addHandler}/>
              </div>
              <div className="form-group">
                  <label> accountType:</label>
                  <input type="password" className="form-control"  placeholder="accountType" name="accountType" onChange={this.addHandler}/>
              </div> 
              <div>
                  <button onClick={this.add}>Add payee</button>
                  <button type='reset'>Reset</button>
              </div>
          </form>
      </div>
    )
  }
}
export default Dash;

