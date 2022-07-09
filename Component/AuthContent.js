/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Alert, StyleSheet} from 'react-native';
import {colors} from '../constants';
import AuthForm from './AuthForm';
import FlatButton from './ui/FlatButton';

function AuthContent({isLogin, onAuthenticate}) {
  const navigation = useNavigation();

  const [credentialsInvalid, setCredentialsInvalid] = useState({
    email: false,
    password: false,
    confirmPassword: false,
  });

  function switchAuthModeHandler() {
    if (isLogin) {
      navigation.replace('Sign Up');
    } else {
      navigation.replace('Log In');
    }
  }

  function submitHandler(credentials) {
    let {email, password, confirmPassword} = credentials;

    email = email.trim();
    password = password.trim();

    const emailIsValid = email.includes('@');
    const passwordIsValid = password.length > 6;
    const passwordsAreEqual = password === confirmPassword;

    if (!emailIsValid && !passwordIsValid && passwordsAreEqual && !isLogin) {
      Alert.alert('Invalid input', 'Please check your entered credentials.');
      setCredentialsInvalid({
        email: !emailIsValid,
        password: !passwordIsValid,
        confirmPassword: !passwordIsValid || !passwordsAreEqual,
      });
      return;
    }
    //will be triggered when ever the form is filled with valid data
    onAuthenticate({email, password});
  }

  return (
    <View style={styles.authContent}>
      <AuthForm
        isLogin={isLogin}
        onSubmit={submitHandler}
        credentialsInvalid={credentialsInvalid}
      />
      <View style={{marginTop: 5, alignSelf: 'center'}}>
        <FlatButton onPress={switchAuthModeHandler}>
          {isLogin ? 'create a new user' : 'Log in instead'}
        </FlatButton>
      </View>
    </View>
  );
}

export default AuthContent;

const styles = StyleSheet.create({
  authContent: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
