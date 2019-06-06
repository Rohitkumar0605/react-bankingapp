import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import swal from 'sweetalert';

class Allfunctions extends Component {
   
    render() {
        return (
          <div className="header ">
              <h1 align="center" className='text-danger'>Customer Login</h1>
             <div> <button><Link to ='/add'></Link></button></div>
             <div> <button><Link to ='/update'></Link></button></div>
             <div> <button><Link to ='/delete'></Link></button></div>
          </div>
        )
      }
    }
    export default Allfunctions;
