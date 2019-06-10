import * as actionTypes from '../actions/actionTypes';
import updateObject from '../utility';

const INITIAL_STATE = {
  scheduledActivities: [],
  loading: true
}

const fetchActivitiesStart = (state, action) => {
  return updateObject(state, { loading: true })
}

const fetchActivitiesSuccess = (state, action) => {
  return updateObject(state, {
    scheduledActivities: action.scheduledActivities,
    loading: false
  })
}

const fetchActivitiesFail = (state, action) => {
  return updateObject(state, { loading: false })
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ACTIVITIES_START:
      return fetchActivitiesStart(state, action);

    case actionTypes.FETCH_ACTIVITIES_SUCCESS:
      return fetchActivitiesSuccess(state, action);

    case actionTypes.FETCH_ACTIVITIES_FAIL:
      return fetchActivitiesFail(state, action);

    default:
      return state;
  }
}