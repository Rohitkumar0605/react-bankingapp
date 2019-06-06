import React, { Component } from 'react';
import {BrowserRouter,Route, Switch, Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import acc from '../assets/acc.png';
import header from '../assets/header.css';
import Footer from "./Footer";
class Dashboard extends Component {
render() {
    return (
    <div>
       <h3 className="dashtext">open a account online</h3>
      <Link to='/account'><img className='image' src={acc} alt='bank'/></Link><hr/>
      <div className="container text-justify">
        <h5 >Do you want to open an ING current account but you don’t have a valid Dutch identity document? In that case you will need to prove that you either live, work, study or own a house in the Netherlands. </h5>
      </div>
      <button className="dashbtn">Brochure to bring</button>
 
    <div>
     <p className="container text-justify">In almost all cases you’ll need an additional document as proof of evidence. Read the brochure to check what kind of document is required in your specific situation. Once you have the required document then we invite you to open an account at an ING branch (by making an online appointment first, click on “Open a current account (in Dutch)”) or to visit an ING Servicepunt. The documents that serve as proof cannot be older than 3 months and of course, you will bring the original document (not a copy) with you.
 
 Note: All European banks have to comply to the new Payment Accounts Directive (PAD) policy which ING has implemented in her customer onboarding processes. </p>
   </div><hr/>
   </div> 
    );
  }
}

export default Dashboard;
