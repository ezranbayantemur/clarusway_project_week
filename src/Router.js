import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from './context/reducer';
import {initialState} from './context/store';

import {Intro, Questions, Finish} from './pages';

const Stack = createStackNavigator();
const store = createStore(reducer, initialState);

function Router() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Intro" component={Intro} />
          <Stack.Screen name="Questions" component={Questions} />
          <Stack.Screen name="Finish" component={Finish} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default Router;
