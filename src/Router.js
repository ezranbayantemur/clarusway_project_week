import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {initialState} from './context/store';
import {reducer} from './context/reducer';

import {Intro, Questions, Finish} from './pages';

function Router() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Intro" component={Intro} />
          <Stack.Screen name="Finish" component={Finish} />
          <Stack.Screen name="Questions" component={Questions} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default Router;
