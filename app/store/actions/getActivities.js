import * as actionTypes from './actionTypes';

export const fetchActivitiesStart = () => {
  return {
    type: actionTypes.FETCH_ACTIVITIES_START
  }
}

export const fetchActivitiesSuccess = (activities) => {
  return {
    type: actionTypes.FETCH_ACTIVITIES_SUCCESS,
    activities: activities
  }
}

export const fetchActivitiesFail = (error) => {
  return {
    type: actionTypes.FETCH_ACTIVITIES_ERROR,
    error: error
  }
}
