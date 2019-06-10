import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import getActivitiesReducer from './reducers/getActivities';
import setActivityReducer from './reducers/setActivity';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [thunk];

const rootReducer = combineReducers({
  activities: getActivitiesReducer,
  newActivity: setActivityReducer
})

const configureStore = () => {
  return createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));
}


export default configureStore;