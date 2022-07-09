/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {colors, images} from '../constants';

const GetStarted = () => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.menu}>
          <Text>
            <Icon name="menu" size={40} color="#4385B7" />
          </Text>
          {/* <Icon name="menu" size={40} color="#4385B7" /> */}
          <Image source={images.profile_photo} />
        </View>
        <View style={{marginTop: 50, alignItems: 'center'}}>
          <Image
            source={images.editedTeamUpSvg}
            resizeMode="contain"
            style={{width: '100%', height: 152}}
          />
          <Text style={styles.welcome}>We are glad you are here!</Text>
          <Text style={styles.subtitle}>
            This platform allows you to input your onboarding/post onboarding
            details thank you for choosing Ecobank
          </Text>
          <TouchableOpacity style={{marginTop: 30}}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Get Started</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Image
          source={images.mockup}
          resizeMode="contain"
          style={{
            // right: 0,
            // bottom: 0,
            top: 350,
            position: 'absolute',
            left: -100,
          }}
        />
      </View>
    </View>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingLeft: 60,
    paddingRight: 20,
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  welcome: {
    fontSize: 25,
    textAlign: 'center',
    marginTop: 20,
    color: '#000000',
    fontWeight: 'bold',
  },
  subtitle: {
    textAlign: 'center',
    color: '#777779',
    marginTop: 24,
  },
  button: {
    backgroundColor: colors.blue,
    width: 165,
    height: 44,
    borderRadius: 4,
    padding: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: colors.white,
  },
});
