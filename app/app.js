import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Splash from './Screens/Splash';
import NavAuth from './navigation/NavAuth';

const Stack = createStackNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerTitleAlign: 'center',
          headerShadowVisible: false,
          headerTitleStyle: {
            fontSize: 18,
            fontFamily: 'Montserrat-Medium',
            color: 'black',
          },
          headerBackTitleVisible: false,
          headerTintColor: 'black',
        }}>
          <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="NavAuth"
          component={NavAuth}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
