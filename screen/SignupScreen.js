/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, {useContext, useState} from 'react';
import {Alert} from 'react-native';
import LoadingOverlay from '../Component/ui/LoadingOverlay';
import {AuthContext} from '../store/auth-context';
import {createUser} from '../util/auth';
import AuthContent from '../Component/AuthContent';

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authCtx = useContext(AuthContext);

  async function signupHandler({email, password}) {
    setIsAuthenticating(true);
    try {
      const token = await createUser(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert(
        'Authentication failed',
        'Could not create you as a user. Please check and try again later! ',
      );
      setIsAuthenticating(false);
    }
  }
  if (isAuthenticating) {
    return <LoadingOverlay message="creating user..." />;
  }
  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
