import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { SavedJobs, Jobs, Introduction } from './pages';

const Stack = createStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Intro" component={Introduction} />
        <Stack.Screen name="Jobs" component={Jobs} />
        <Stack.Screen name="SavedJobs" component={SavedJobs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;