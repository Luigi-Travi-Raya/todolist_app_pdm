import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Home from './screens/Home';
import CreateEdit from './screens/CreateEdit';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{
          headerShown: false
        }} />
        <Stack.Screen name="CreateEdit" component={CreateEdit} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
