import React, { Component } from 'react';
import logo from './assets/logo.png';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Account from './components/Account';
import acc from './assets/acc.png';
import header from './assets/header.css';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Details from './components/Details';
import Update from './components/Update';
import Add from './components/Add';
//import {logo} from './assets/logo.hd.png';
class App extends Component {
   render() {
      return (
         <div className='app'>

            <BrowserRouter>
            <div>
               <div className='round1' >
                  <img src={logo} alt='not found' width="200px" height="100px" />
                  <span className='data' align='center' style={{ color: '#fff', fontSize: '40px', margin: '20%' }}>ING Banking Online</span>
                  <div>
                   <div>

                        <button className='button round1' ><Link to='/account' style={{ color: '#ff6200' }}>Create account</Link></button>
                        <button className='button round1' style={{ color: '#ff6200' }} onClick={this.login}><Link to='/login' style={{ color: '#ff6200' }}>Login</Link></button>
                        <button className='button round1'><Link to='/dashboard' style={{ color: '#ff6200' }}>Dash Board</Link></button></div>

                  </div>
                  </div>
                  <Switch>
                     <Route path='/' component={Dashboard} exact />
                     <Route path='/dashboard' component={Dashboard} exact />
                     <Route path='/update/:payeeIdParam' component={Update} />
                     <Route path='/add' component={Add} />
                     <Route path='/account' component={Account} />
                     <Route path='/home' component={Details} />
                     <Route path='/login' component={Login} />
                  </Switch>
               </div>
            </BrowserRouter>
         </div>
      );
   }
}

export default App;
