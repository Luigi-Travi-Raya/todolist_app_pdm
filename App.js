import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Home from './screens/Home';
import CreateEdit from './screens/CreateEdit';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerStyle: {
          backgroundColor: "rgb(17, 24, 39)",
        },
        headerTintColor: "white",
        animation: "slide_from_bottom"
      }}>
        <Stack.Screen name="Home" component={Home} options={{
          headerShown: false
        }} />
        <Stack.Screen name="CreateEdit" component={CreateEdit} options={{
          presentation: 'formSheet'
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
