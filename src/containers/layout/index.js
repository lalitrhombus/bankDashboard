import React from 'react';
import { Route} from 'react-router-dom'

import Header from '../header';
import Footer from '../footer';
import Home from '../home'
import Login from '../login';
import Create from '../create';
import Queue from '../queue';
import PendingView from '../pending';
import MyQueue from '../myqueue';
import './layout.css';

const mainLayout = () => (
  <div>
    <Header/>
    <div className="mainView">
      <Route exact path="/" component={Home} />
      <Route exact path="/create" component={Create} />
      <Route exact path="/queue" component={Queue} />
      <Route exact path="/pending" component={PendingView} />
      <Route exact path="/myqueue" component={MyQueue} />
    </div> 
    <Footer/>
  </div>
)

const loginPage = ()=>(
  <Login/>
)

let Layout;
if(localStorage.getItem("sessionId", "value")){
  Layout = mainLayout;
} else {
  Layout = loginPage;
}

export default Layout