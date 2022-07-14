/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Pressable,
  TouchableOpacity,
} from 'react-native';

import Input from './Input';
import {CustomButton} from '../Components';
import {colors, images} from '../constants';
import {useNavigation} from '@react-navigation/native';

function AuthForm({isLogin, onSubmit, credentialsInvalid}) {
  const navigation = useNavigation();
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState('');

  const {
    email: emailIsInvalid,
    password: passwordIsInvalid,
    confirmPassword: passwordsDontMatch,
  } = credentialsInvalid;

  function updateInputValueHandler(inputType, enteredValue) {
    switch (inputType) {
      case 'email':
        setEnteredEmail(enteredValue);
        break;
      case 'password':
        setEnteredPassword(enteredValue);
        break;
      case 'confirmPassword':
        setEnteredConfirmPassword(enteredValue);
        break;
    }
  }

  function submitHandler() {
    onSubmit({
      email: enteredEmail,
      password: enteredPassword,
      confirmPassword: enteredConfirmPassword,
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 20}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingTop: 30, paddingHorizontal: 20}}
          bounces={true}>
          <Image
            source={images.logo}
            resizeMode="contain"
            style={styles.appLogo}
          />
          <Text style={styles.poweredTxt}>Powered by Ecobank Group</Text>
          {!isLogin ? (
            <Text style={styles.header}>Sign Up</Text>
          ) : (
            <Text style={styles.header}>Log In</Text>
          )}
          <Input
            label="Email"
            placeholder="Enter your email address"
            isInvalid={emailIsInvalid}
            onUpdateValue={updateInputValueHandler.bind(this, 'email')}
            value={enteredEmail}
          />
          <Input
            label="Password"
            placeholder="Enter your password"
            password
            isInvalid={passwordIsInvalid}
            onUpdateValue={updateInputValueHandler.bind(this, 'password')}
            value={enteredPassword}
            isLogin={isLogin}
          />
          {!isLogin && (
            <Input
              label="Password Confirmation"
              placeholder="Enter your confirm password"
              password
              onUpdateValue={updateInputValueHandler.bind(
                this,
                'confirmPassword',
              )}
              value={enteredConfirmPassword}
              isInvalid={passwordsDontMatch}
            />
          )}
          {isLogin && (
            <TouchableOpacity
              onPress={() => navigation.navigate('Forgot Password')}>
              <Text
                style={{
                  color: colors.subGrey,
                  textAlign: 'right',
                  paddingBottom: 20,
                }}>
                Forgot Password
              </Text>
            </TouchableOpacity>
          )}

          <CustomButton title="SUBMIT" onPress={submitHandler} />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default AuthForm;

const styles = StyleSheet.create({
  container: {backgroundColor: colors.white, flex: 1},
  appLogo: {
    height: 200,
    width: '80%',
    maxHeight: 350,
    alignSelf: 'center',
  },
  poweredTxt: {
    color: '#8E8E90',
    textAlign: 'center',
    fontSize: 12,
    fontFamily: 'Roboto-Regular',
  },
  header: {
    fontSize: 25,
    fontFamily: 'Roboto-Bold',
    color: colors.blue,
    marginTop: 30,
    marginBottom: 25,
  },
  signUpHeader: {
    fontSize: 25,
    fontFamily: 'Roboto-Bold',
    color: colors.blue,
    marginTop: 20,
    marginBottom: 20,
  },
});
