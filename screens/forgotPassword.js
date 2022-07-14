/* eslint-disable prettier/prettier */
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Alert} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LoadingOverlay from '../Component/ui/LoadingOverlay';
import {forgotPassword} from '../util/auth';

const ForgotPassword = () => {
  const navigation = useNavigation();
  const [isValidatingEmail, setIsValidatingEmail] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState('');

  async function forgotHandler() {
    setIsValidatingEmail(true);
    console.log('Email:', enteredEmail);
    let token = '';
    try {
      token = await forgotPassword(enteredEmail);
      console.log(token);
      navigation.navigate('Log In');
    } catch (error) {
      console.error('erorr', error);
      Alert.alert('Password cannot be reset try again later');
    } finally {
      setIsValidatingEmail(false);
    }
  }
  if (isValidatingEmail) {
    return <LoadingOverlay message="hold on..." />;
  }

  function updateInputValueHandler(inputType, enteredValue) {
    switch (inputType) {
      case 'email':
        setEnteredEmail(enteredValue);
        break;
    }
  }

  return (
    <View style={styles.container}>
      <Ionicons
        name="chevron-back-sharp"
        size={24}
        color="#4385B7"
        onPress={() => navigation.navigate('Log In')}
      />
      <Text style={styles.paragraph}>Forgot Password</Text>
      <Text style={styles.subtitle}>
        Enter your email to reset your password
      </Text>
      <Text style={styles.headerInput}>Email Address</Text>
      <TextInput
        style={styles.textInput}
        placeholderTextColor="#A0A0A0"
        placeholder="e.g micheal@gmail.com"
        onChangeText={updateInputValueHandler.bind(this, 'email')}
        value={enteredEmail}
      />

      <Text style={styles.resetPW} onPress={forgotHandler}>
        Reset Password
      </Text>

      <Text style={styles.goBack} onPress={() => navigation.navigate('Log In')}>
        Go back
      </Text>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 90,
  },
  paragraph: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#4385B7',
    paddingTop: 80,
  },
  subtitle: {
    color: '#A0A0A0',
    fontSize: 12,
    paddingTop: 10,
  },
  headerInput: {
    paddingTop: 70,
    color: '#A0A0A0',
  },
  textInput: {
    backgroundColor: '#F7F7F7',
    height: 44,
    paddingLeft: 10,
    borderRadius: 4,
  },
  resetPW: {
    color: '#FFFFFF',
    backgroundColor: '#4385B7',
    height: 44,
    textAlign: 'center',
    paddingTop: 12,
    borderRadius: 4,
    marginTop: 80,
  },
  goBack: {
    textAlign: 'center',
    paddingTop: 20,
    color: '#BED600',
  },
});
