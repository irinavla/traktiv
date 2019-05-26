// import * as firebase from 'react-native-firebase';

// export const setActivityData = (activityData) => {
//   return {
//     type: "setActivityData",
//     value: activityData
//   };
// };

// export const watchActivityData = () => {
//   return function (dispatch) {
//     firebase.database().ref("activity").on("value", function (snapshot) {

//       var activityData = snapshot.val();
//       var actionSetActivityData = setPersonData(activityData);
//       dispatch(actionSetActivityData);

//     }, function (error) { console.log(error); });
//   }
// };

export const SET_ACTIVITY = activity => (
  {
    type: 'SET_ACTIVITY',
    payload: activity,
  }
);