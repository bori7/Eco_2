/* eslint-disable prettier/prettier */
import AuthContent from '../Component/AuthContent';
import React, {useState} from 'react';
import {login} from '../util/auth';
import LoadingOverlay from '../Component/ui/LoadingOverlay';

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  async function loginHandler({email, password}) {
    setIsAuthenticating(true);
    await login(email, password);
    setIsAuthenticating(false);
  }
  if (isAuthenticating) {
    return <LoadingOverlay message="logging in..." />;
  }
  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
