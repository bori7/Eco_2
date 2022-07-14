/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import React, {useContext, useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Image, StatusBar} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {
  GetStarted,
  LicenseAgreement,
  ForgotPassword,
  ModalO,
  HomeScreen,
} from './screens';
import WelcomeScreen from './screen/WelcomeScreen';
import OnboardingScreen from './screen/OnboardingScreen';

import {PersonalHistory, DressCode} from './forms';
import AuthForm from './Component/AuthForm';
import {colors} from './constants';
import LoginScreen from './screen/LoginScreen';
import SignupScreen from './screen/SignupScreen';
import AuthContextProvider, {AuthContext} from './store/auth-context';

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

function AuthStack() {
  const [isAppFirstLaunched, setIsAppFirstLaunched] = useState(null);

  useEffect(() => {
    async function isFirstLaunch() {
      const appData = await AsyncStorage.getItem('isAppFirstLaunced');
      console.log(appData);
      if (appData == null) {
        setIsAppFirstLaunched(true);
        AsyncStorage.setItem('isAppFirstLaunched', 'false');
      } else {
        setIsAppFirstLaunched(false);
      }
    }
    isFirstLaunch();
  }, []);

  return (
    isAppFirstLaunched != null && (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        {isAppFirstLaunched && (
          <Stack.Screen name="GetStarted" component={GetStarted} />
        )}
        <Stack.Screen name="Log In" component={LoginScreen} />
        <Stack.Screen name="Sign Up" component={SignupScreen} />
        <Stack.Screen name="Forgot Password" component={ForgotPassword} />
      </Stack.Navigator>
    )
  );
}

function AuthenticatedStack() {
  const [isAppFirstLaunched, setIsAppFirstLaunched] = useState(null);

  useEffect(() => {
    async function isFirstLaunch() {
      const appData = await AsyncStorage.getItem('isAppFirstLaunced');
      if (appData == null) {
        setIsAppFirstLaunched(true);
        AsyncStorage.setItem('isAppFirstLaunched', 'false');
      } else {
        setIsAppFirstLaunched(false);
      }
    }
    isFirstLaunch();
  }, []);

  // function drawerNavigation(){
  //   <Drawer.Navigator>
  // }

  return (
    isAppFirstLaunched != null && (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {isAppFirstLaunched && (
          <Stack.Screen name="Ecobank Policy" component={LicenseAgreement} />
        )}

        <Stack.Screen name="Welcome Screen" component={HomeScreen} />
        <Stack.Screen name="Dress Code" component={DressCode} />
        <Stack.Screen name="Personal History" component={PersonalHistory} />
      </Stack.Navigator>
    )
  );
}
function Navigation() {
  const authCtx = useContext(AuthContext);

  return (
    <NavigationContainer>
      {!authCtx.isAuthenticated && <AuthStack />}
      {authCtx.isAuthenticated && <AuthenticatedStack />}
    </NavigationContainer>
  );
}

function Root() {
  const [isTryingLogin, setIsTryingLogin] = useState(true);

  const authCtx = useContext(AuthContext);

  useEffect(() => {
    async function fetchToken() {
      const storedToken = await AsyncStorage.getItem('token');

      if (storedToken) {
        authCtx.authenticate(storedToken);
      }

      setIsTryingLogin(false);
    }

    fetchToken();
  }, []);

  if (isTryingLogin) {
    return <OnboardingScreen />;
  }

  return <Navigation />;
}

const App = ({navigation}) => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <AuthContextProvider>
        <Root />
      </AuthContextProvider>
    </>
  );
};

export default App;
