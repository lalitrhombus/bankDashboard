import React from 'react';
import ListView from '../listView';
import './pending.css';

export default class PendingView extends React.Component {
  onFbtnClick = ()=>{
    alert("Devesh Chutiya hai pending mai");
  }
  onSBtnClick = ()=>{
    alert("Devesh Pakka Chutiya hai pending mai");
  }
  render() {
    return (
      <div className="pendingView">
        <ListView FBtnName='Action' onFbtnClick={this.onFbtnClick}/>
      </div>
    );
  }
}

