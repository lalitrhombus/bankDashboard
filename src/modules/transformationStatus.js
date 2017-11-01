export const FETCH_TRANSFORMATION_STATUS_INITIATIVE_DATA = 'FETCH_TRANSFORMATION_STATUS_INITIATIVE_DATA';

const initialState = {
  header: [
    { text: 'Initiative', width: 40},
    { text: 'Impact vs Target(%)', width: 10 },
    { text: 'Status vs Milestones', width: 10 },
    { text: 'L4 Completion Date', width: 15 },
    { text: 'Initiative Owner', width: 15 },
    { text: 'Comment', width: 0 },
  ],
  data: {
    Debt: {
      D1: {
        name: 'value assurence',
        initiative_owner: 'Deepak Joshi',
        ownerEmail: 'abcd@gmail.com',
        ownerContact: '+918743850717',
        l4_completion_date: '25 / 06/ 2004',
        impact_vs_target: '15.43',
        state_vs_milestones: 'ON',
        comment: 'i am just a sample comment for Display',
      },
      D2: {
        name: 'value assurence',
        initiative_owner: 'Deepak Joshi',
        ownerEmail: 'abcd@gmail.com',
        ownerContact: '+918743850717',
        l4_completion_date: '25 / 06/ 2004',
        impact_vs_target: '15.43',
        state_vs_milestones: 'DEL',
        comment: 'i am just a sample comment for Display',
      },
      D3: {
        name: 'value assurence',
        initiative_owner: 'Deepak Joshi',
        ownerEmail: 'abcd@gmail.com',
        ownerContact: '+918743850717',
        l4_completion_date: '25 / 06/ 2004',
        impact_vs_target: '15.43',
        state_vs_milestones: 'ON',
        comment: 'i am just a sample comment for Display',
      },
      D4: {
        name: 'value assurence',
        initiative_owner: 'Deepak Joshi',
        ownerEmail: 'abcd@gmail.com',
        ownerContact: '+918743850717',
        l4_completion_date: '25 / 06/ 2004',
        impact_vs_target: '15.43',
        state_vs_milestones: 'ON',
        comment: 'i am just a sample comment for Display',
      },
      D5: {
        name: 'value assurence',
        initiative_owner: 'Deepak Joshi',
        ownerEmail: 'abcd@gmail.com',
        ownerContact: '+918743850717',
        l4_completion_date: '25 / 06/ 2004',
        impact_vs_target: '15.43',
        state_vs_milestones: 'OFF',
        comment: 'i am just a sample comment for Display',
      },
    },
    Audit: {
      A1: {
        name: 'value assurence',
        initiative_owner: 'Deepak Joshi',
        ownerEmail: 'abcd@gmail.com',
        ownerContact: '+918743850717',
        l4_completion_date: '25 / 06/ 2004',
        impact_vs_target: '15.43',
        state_vs_milestones: 'ON',
        comment: 'i am just a sample comment for Display',
      },
      A2: {
        name: 'value assurence',
        initiative_owner: 'Deepak Joshi',
        ownerEmail: 'abcd@gmail.com',
        ownerContact: '+918743850717',
        l4_completion_date: '25 / 06/ 2004',
        impact_vs_target: '15.43',
        state_vs_milestones: 'DEL',
        comment: 'i am just a sample comment for Display',
      },
    },
    LTO: {
      L1: {
        name: 'value assurence',
        initiative_owner: 'Deepak Joshi',
        ownerEmail: 'abcd@gmail.com',
        ownerContact: '+918743850717',
        l4_completion_date: '25 / 06/ 2004',
        impact_vs_target: '15.43',
        state_vs_milestones: 'ON',
        comment: 'i am just a sample comment for Display',
      },
      L2: {
        name: 'value assurence',
        initiative_owner: 'Deepak Joshi',
        ownerEmail: 'abcd@gmail.com',
        ownerContact: '+918743850717',
        l4_completion_date: '25 / 06/ 2004',
        impact_vs_target: '15.43',
        state_vs_milestones: 'ON',
        comment: 'i am just a sample comment for Display',
      },
      L3: {
        name: 'value assurence',
        initiative_owner: 'Deepak Joshi',
        ownerEmail: 'abcd@gmail.com',
        ownerContact: '+918743850717',
        l4_completion_date: '25 / 06/ 2004',
        impact_vs_target: '15.43',
        state_vs_milestones: 'ON',
        comment: 'i am just a sample comment for Display',
      },
    },
    'Data/IT': {
      L1: {
        name: 'value assurence',
        initiative_owner: 'Deepak Joshi',
        ownerEmail: 'abcd@gmail.com',
        ownerContact: '+918743850717',
        l4_completion_date: '25 / 06/ 2004',
        impact_vs_target: '15.43',
        state_vs_milestones: 'ON',
        comment: 'i am just a sample comment for Display',
      },
      L2: {
        name: 'value assurence',
        initiative_owner: 'Deepak Joshi',
        ownerEmail: 'abcd@gmail.com',
        ownerContact: '+918743850717',
        l4_completion_date: '25 / 06/ 2004',
        impact_vs_target: '15.43',
        state_vs_milestones: 'ON',
        comment: 'i am just a sample comment for Display',
      },
      L3: {
        name: 'value assurence',
        initiative_owner: 'Deepak Joshi',
        ownerEmail: 'abcd@gmail.com',
        ownerContact: '+918743850717',
        l4_completion_date: '25 / 06/ 2004',
        impact_vs_target: '15.43',
        state_vs_milestones: 'ON',
        comment: 'i am just a sample comment for Display',
      },
    }
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TRANSFORMATION_STATUS_INITIATIVE_DATA:
      return {
        ...state,
      }

    default:
      return state
  }
}


export const fetchFSInititiveData = () => {
  return dispatch => {
    dispatch({
      type: FETCH_TRANSFORMATION_STATUS_INITIATIVE_DATA
    })
  }
}