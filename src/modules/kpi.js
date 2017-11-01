import { getKPI } from '../api'
export const FETCH_KPI_DATA = 'FETCH_KPI_DATA';

const initialState = {
  header: [
    { text: '', width: 50},
    { text: 'Current Value', width: 15 },
    { text: 'End Of quater target', width: 15 },
    { text: '% change vs last month', width: 20 },
  ],
  data: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_KPI_DATA_FULFILLED':
      return {
        ...state,
        data: action.payload.body.data.kpis
      }

    default:
      return state
  }
}


export const fetchKpiData = () => {
  return {
    type: FETCH_KPI_DATA,
    payload: getKPI()
  }
}
