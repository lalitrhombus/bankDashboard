import React from 'react';
import './login.css';
import imgUrl from './login.png';

export default class Login extends React.Component {
  render() {
    return (
      <div className="login">
        <img src={imgUrl} alt=""/>
        <input type="text" placeholder="Email"/>
        <input type="password" placeholder="Password"/>
        <button>Log in</button>
      </div>
    );
  }
}

