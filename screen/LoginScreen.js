/* eslint-disable prettier/prettier */
import AuthContent from '../Component/AuthContent';
import React, {useContext, useState} from 'react';
import {login} from '../util/auth';
import LoadingOverlay from '../Component/ui/LoadingOverlay';
import {Alert} from 'react-native';
import {AuthContext} from '../store/auth-context';

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authCtx = useContext(AuthContext);

  async function loginHandler({email, password}) {
    setIsAuthenticating(true);
    try {
      const token = await login(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert(
        'Authentication failed',
        'Could not log you in. Please check and try again later! ',
      );
    }
    setIsAuthenticating(false);
  }
  if (isAuthenticating) {
    return <LoadingOverlay message="logging in..." />;
  }
  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
