import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import StartScreen from '../screens/StartScreen';
import ScheduleScreen from '../screens/ScheduleScreen';

const MainStack = createStackNavigator(
  {
    Start: {
      screen: StartScreen
    },
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
);

const RootNavigator = createStackNavigator(
  {
    Main: {
      screen: MainStack
    },
    Schedule: {
      screen: ScheduleScreen
    }
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
);


export default createAppContainer(RootNavigator);