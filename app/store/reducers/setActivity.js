import * as actionTypes from '../actions/actionTypes';
import updateObject from '../utility';

const INITIAL_STATE = {
  availableDays: [],
  availableSlots: [],
  formattedSlots: [],
  selectedActivity: {
    name: '',
    duration: '15 min',
    placeholderSlot: 'Pick a date & time or find a free slot',
    slot: {}
  },
  showDurationPicker: false,
  showSlotPicker: false
}

const setActivityType = (state, action) => {
  console.log(state, action);

  return state;
}

const setActivityDuration = (state, action) => {
  console.log(state, action);

  return state;
}

const setActivitySlot = (state, action) => {
  console.log(state, action);

  return state;
}

const setActivityReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SET_ACTIVITY_TYPE:
      return setActivityType(state, action);

    case actionTypes.SET_ACTIVITY_DURATION:
      return setActivityDuration(state, action);

    case actionTypes.SET_ACTIVITY_SLOT:
      return setActivitySlot(state, action);

    default:
      return state;
  }
}

export default setActivityReducer