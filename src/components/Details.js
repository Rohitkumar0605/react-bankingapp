import React, { Component } from 'react';
import axios from 'axios';
import {BrowserRouter,Link} from 'react-router-dom';
import swal from 'sweetalert';
//import Update from './Update';
import deletee from '../assets/deletee.gif';
import add from '../assets/add.png';
import header from '../assets/header.css'
import edit from '../assets/edit.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
     
    }
  }
  delete = (del)=>{
    return new Promise((resolve, reject) => {
      console.log(del.payeeId)
      axios.delete(`http://192.168.43.22:8090/app/deletePayee/${del.payeeId}`).then(function (response) {
        resolve(response);
        swal("deleted", "Successfully Deleted", "success")
        window.location.reload();
      }).catch(function (error) {
        reject(error);
      });
    });
   
  }
  componentDidMount() {
    this.getData().then(response => {
        console.log(response)
      this.setState({ list: response.data });
      console.log(this.state.list)
    });
  }
  add = (data) =>{
    console.log(data.payeeId)
    this.props.history.push('/add');
  }
  update = (data) =>{
    console.log(data.payeeId)
    this.props.history.push('/update/' + data.payeeId);
  }
  getData = () => {
    return new Promise((resolve, reject) => {
      axios.get(' http://192.168.43.22:8090/app/getAllPayee').then(function (response) {
        resolve(response);
      }).catch(function (error) {
        reject(error);
      });
    });
  }
   render() {
    return(
      <div>
         <button type="button" className="btim"  onClick={this.add}>add<img className="btnimg" src={add}/>by clicking</button>
          <table className="table table-hover ">
            <thead className="head">
              <tr><td>Payee Name</td><td>Account Number</td><td>Account Type</td><td>Branch Name</td><td>Actions</td></tr>
            </thead>
      <tbody>
          {
          this.state.list.map((item, i) => {
                                return (
                                    <tr key={i}>
                                       <td>{item.payeeName}</td>
                                        <td>{item.accountNumber}</td>
                                        <td>{item.accountType}</td>
                                        <td>{item.branch}</td>
                                        <td><button type="button"  onClick={() =>this.update(item)}><img className="btnimg" src={edit}/></button></td>
                                        <td><button type="button"  onClick={() => this.delete(item)}><img className="btnimg" src={deletee}/></button></td>
                                    </tr>
                                    
                                )
                            })
                        }
         </tbody>
         </table>                                  
                  </div>
    )
  }
}
export default Details;

