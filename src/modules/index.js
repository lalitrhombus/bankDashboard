import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import transformationStatus from './transformationStatus';
import kpi from './kpi';
import status from './status';

export default combineReducers({
  router: routerReducer,
  kpi,
  transformationStatus,
  status
})
