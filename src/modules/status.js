export const FETCH_STATUS_DATA = 'FETCH_STATUS_DATA';

const initialState = {
  ON: {
    text: 'On Track',
    className: 'onTrack',
  },
  DEl: {
    text: 'Delayed',
    className: 'deleyed',
  },
  OFF: {
    text: 'Off Track, Management attention required',
    className: 'offTrack',
  },
  HOLD: {
    text: 'On Hold',
    className: 'onHold',    
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STATUS_DATA:
      return {
        ...state,
      }

    default:
      return state
  }
}


export const fetchStatusData = () => {
  return dispatch => {
    dispatch({
      type: FETCH_STATUS_DATA
    })
  }
}