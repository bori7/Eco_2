/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import axios from 'axios';
import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from '../store/auth-context';

function WelcomeScreen() {
  const [fetchedMessage, setFetchMessage] = useState('');

  const authCtx = useContext(AuthContext);
  const token = authCtx.token;

  useEffect(() => {
    axios
      .get(
        'https://ecoboard-fe627-default-rtdb.firebaseio.com/message.json?auth=' +
          token,
      )
      .then(reponse => {
        console.log(reponse.data);
        setFetchMessage(reponse.data);
      });
  }, [token]);
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      <Text>{fetchedMessage}</Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    fontFamily: 'Roboto-Bold',
  },
});
