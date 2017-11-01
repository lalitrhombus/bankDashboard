import React from 'react';
import { Route, Link } from 'react-router-dom';
import './home.css';

const Home = props => (
  <div className="linkView">
    <Link to="/create">
      Create New
    </Link>
    <Link to="/queue">
      Queue
    </Link>
    <Link to="/myqueue">
      My queue
    </Link>
    <Link to="/pending">
      Pending
    </Link>
  </div>
)

export default Home
