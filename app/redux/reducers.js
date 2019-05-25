const INITIAL_STATE = {
  scheduledActivities: [],
  loading: true,
  errorMessage: ''
}


export const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_ACTIVITY":
      return { ...state, activityData: action.value };

    default:
      return state;
  }
}