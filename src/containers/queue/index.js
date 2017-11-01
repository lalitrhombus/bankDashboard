import React from 'react';
import ListView from '../listView';
import './queue.css';

export default class Queue extends React.Component {
  onFbtnClick = ()=>{
    alert("Devesh Chutiya hai queue mai");
  }
  onSBtnClick = ()=>{
    alert("Devesh Pakka Chutiya hai queue mai");
  }
  render() {
    return (
      <div className="queue">
        <ListView FBtnName='Edit' SBtnName='Delete' onFbtnClick={this.onFbtnClick} onSBtnClick={this.onSBtnClick}/>
      </div>
    );
  }
}

