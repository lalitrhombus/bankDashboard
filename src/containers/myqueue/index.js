import React from 'react';
import ListView from '../listView';
import './myqueue.css';

export default class MyQueue extends React.Component {
  onFbtnClick = ()=>{
    alert("Devesh Chutiya hai pending mai");
  }
  onSBtnClick = ()=>{
    alert("Devesh Pakka Chutiya hai pending mai");
  }
  render() {
    return (
      <div className="myQueue">
        <ListView FBtnName='Edit' SBtnName='Delete' onFbtnClick={this.onFbtnClick} onSBtnClick={this.onSBtnClick}/>
      </div>
    );
  }
}

