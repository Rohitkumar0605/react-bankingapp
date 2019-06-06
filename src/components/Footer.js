import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import safe from '../assets/safe.png';
import secure from '../assets/secure.png';
import help from '../assets/help.png';
import mob from '../assets/mob.png';
import fb from '../assets/facebook.png';
import twitter from '../assets/twitter.png';
import whatsapp from '../assets/whatsapp.png';
import insta from '../assets/insta.jpg';
import footer from '../assets/Footer.css'


class Footer extends Component{
  render(){
return (
<div className="footer">
<table className="table">
<tbody>
<tr><td><img src={secure}/><br/><b>100% SECURE PAYMENTS</b><br/>Moving your card details to much more secured place</td>
<td><img src={safe}/><br/><b>TRUSTPAY</b><br/>100% Payment protection and Easy return policy</td>
<td><img src={help}/><br/><b>HELP CENTER</b><br/>Got a question?Look no further.Browse our FAQ's and submit query here</td>
<td><img src={mob}/><br/><b>SHOP ON THE GO</b><br/>Download app and get exicting offers at your fingertips</td>
</tr>
</tbody>
</table>
<hr/>
<div className="row">
<div className="column"><b>policy info</b>
<p>privacy policy</p>
<p>terms of use</p>
</div>
<div className="column"><b>About</b>
<p>contact us</p>
<p>FAQ's</p>
</div>
<div ><b>subscribe</b>
<p><input type="text" placeholder="enter your email-id"/><button>subscribe</button></p>
</div>
</div>
<hr/>
<div align='center'>CONNECT US</div>
<div className="image"><img src={fb}/><img src={whatsapp}/><img  src={insta}/><img  src={twitter}/></div>
</div>
);
 }
}
export default Footer;