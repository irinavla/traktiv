import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import firebase from 'react-native-firebase';
import { rootReducer } from './reducers';


export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

const setActivityData = (activityData) => {
  return {
    type: "setActivityData",
    value: activityData
  };
};

const watchActivityData = () => {
  return function (dispatch) {
    firebase.database().ref("activity").on("value", function (snapshot) {

      var activityData = snapshot.val();
      var actionSetActivityData = setPersonData(activityData);
      dispatch(actionSetActivityData);

    }, function (error) { console.log(error); });
  }
};

export { setActivityData, watchActivityData };