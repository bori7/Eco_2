/* eslint-disable prettier/prettier */
import React, {useContext, useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Image, StatusBar} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import images from './constants';

import {
  SetUp,
  GetStarted,
  OnboardingScreen,
  LicenseAgreement,
  ForgotPassword,
  ModalO,
  HomeScreen,
} from './screens';
import WelcomeScreen from './screen/WelcomeScreen';

import {DressCode} from './forms';
import AuthForm from './Component/AuthForm';
import {colors} from './constants';
import LoginScreen from './screen/LoginScreen';
import SignupScreen from './screen/SignupScreen';
import AuthContextProvider, {AuthContext} from './store/auth-context';
import IconButton from './Component/ui/IconButton';

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
          backgroundColor: colors.grey,
        },
        headerTintColor: colors.blue,
        headerTitleStyle: {
          fontFamily: 'Roboto-Bold',
          fontSize: 20,
        },
        contentStyle: {
          backgroundColor: colors.red,
        },
      }}>
      <Stack.Screen
        name="Welcome Screen"
        component={HomeScreen}
        options={({navigation}) => ({
          headerLeft: ({tintColor}) => (
            <IconButton
              icon="menu"
              color="#23557F"
              size={30}
              onPress={() => navigation.navigate('Home')}
            />
          ),
          headerRight: ({tintColor}) => (
            <Image
              source={require('./assets/images/profilePhoto.png')}
              onPress={() => navigation.navigate('Personal History')}
            />
          ),
        })}
      />
      <Stack.Screen
        name="Personal History"
        component={DressCode}
        options={({navigation}) => ({
          headerLeft: ({tintColor}) => (
            <IconButton
              icon="chevron-back"
              color="#23557F"
              size={30}
              onPress={() => navigation.navigate('Home')}
            />
          ),
        })}
      />
    </Stack.Navigator>
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

const App = () => {
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
