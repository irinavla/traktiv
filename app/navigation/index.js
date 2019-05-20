import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import StartScreen from '../screens/StartScreen'

const RootNavigator = createStackNavigator(
  {
    Start: {
      screen: StartScreen
    },
  }
);


export default createAppContainer(RootNavigator);