import React, { Component } from 'react';
import {BrowserRouter,Link} from 'react-router-dom';
import axios from 'axios';
import Details from './Details';
import 'bootstrap/dist/css/bootstrap.min.css';
import swal from 'sweetalert';

class Update extends Component {
  constructor(props) {
    super(props);
    this.state = {
      updatelist: {
        payeeId : "",
        payeeName: "",
        branch:"",
        accountNumber:"",
        accountType:"",
        payeeId:props.match.params.payeeIdParam,
      },
      list:[]
     
    }
  }
  componentDidMount() {
    this.getData().then(response => {
        console.log(response)
      this.setState({ list: response.data });
      console.log(this.state.list)
    });
  }
  getData = () => {
    const {payeeId}=this.state;
    return new Promise((resolve, reject) => {
      axios.get(`http://192.168.43.22:8090/app/getAllPayee`).then(function (response) {
        resolve(response);
      }).catch(function (error) {
        reject(error);
      });
    });
  }
    updateData = () =>{
    const {updatelist}=this.state;
    return new Promise((resolve, reject) => {
      axios.put(`http://192.168.43.22:8090/app/updatePayee/${updatelist.payeeId}/${updatelist.accountNumber}`,updatelist).then(function (response) {
        resolve(response);
        console.log(response);
        swal("Details updated Successfully!","Done", "success")
      }).catch(function (error) {
        reject(error);
      });
    });
  }
  updateHandler = (event)=>{
    const {updatelist}=this.state;
    updatelist[event.target.name]=event.target.value;
    this.setState({updatelist});
    console.log(updatelist,"name");
  }
   render() {
    return (
      <div className='container'>
          <table className="table table-hover">
          <tr><h1>Update Details</h1> </tr>
          <tr ><td className='table-primary'><input  type="text" required name="payeeId"placeholder="payeeId" value={this.state.list.payeeId} onChange={this.updateHandler} /></td></tr>
          <tr><td><input type="text" required name="payeeName" placeholder="payeeName" value={this.state.list.payeeName} onChange={this.updateHandler}/></td></tr>
          <tr><td><input type="text" required name="branch" placeholder="branch" value={this.state.list.branch} onChange={this.updateHandler}/></td></tr>
          <tr><td><input type="number" required name="accountNumber" placeholder="accountnumber" value={this.state.list.accountNumber} onChange={this.updateHandler}/></td></tr>
          <tr><td className='table-danger'><input type="text" required placeholder="accounttype" value={this.state.list.accountType} name="accountType" onChange={this.updateHandler}/></td></tr>
          <tr><td ><button className="btn btn-primary" onClick={this.updateData}>UPDATE DETAILS</button></td></tr>
        </table>
      </div>
    )
  }
}
export default Update;

