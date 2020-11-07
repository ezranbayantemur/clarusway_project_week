import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Login, Sign, Timeline} from './pages';

const Stack = createStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      {
        // ...
      }
    </NavigationContainer>
  );
}

export default Router;
