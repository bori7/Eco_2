/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';

import {
  SetUp,
  GetStarted,
  OnboardingScreen,
  LicenseAgreement,
  ForgotPassword,
  ModalO,
  HomeScreen,
} from './screens';

import {DressCode} from './forms';
import AuthForm from './Component/AuthForm';
import {colors} from './constants';
import LoginScreen from './screen/LoginScreen';
import SignupScreen from './screen/SignupScreen';

const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.white,
          headerTintColor: 'white',
          contentStyle: {backgroundColor: colors.white},
        },
      }}>
      <Stack.Screen name="Log In" component={LoginScreen} />
      <Stack.Screen name="Sign Up" component={SignupScreen} />
    </Stack.Navigator>
  );
}

function AuthenticatedStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.white,
          headerTintColor: 'white',
          contentStyle: {backgroundColor: colors.white},
        },
      }}>
      <Stack.Screen name="Home Screen" component={HomeScreen} />
    </Stack.Navigator>
  );
}
function Navigation() {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
}

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Navigation />
    </>
  );
};

export default App;
