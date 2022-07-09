/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {colors} from '../constants';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function Input({
  label,
  error,
  password,
  iconName,
  keyboardType,
  onUpdateValue,
  value,
  isInvalid,
  placeholder,
}) {
  const [hidePassword, setHidePassword] = useState(password);
  return (
    <View style={{marginBottom: 30}}>
      <Text style={[styles.label, isInvalid && styles.labelInvalid]}>
        {label}
      </Text>
      <View style={[styles.inputContainer]}>
        <Icon
          name={iconName}
          style={{color: colors.darkBlue, fontSize: 22, marginRight: 10}}
        />
        <TextInput
          autoCorrect={false}
          secureTextEntry={hidePassword}
          style={{color: colors.darkBlue, flex: 1}}
          autoCapitalize={false}
          keyboardType={keyboardType}
          onChangeText={onUpdateValue}
          value={value}
          placeholder={placeholder}
        />
        {password && (
          <Icon
            onPress={() => setHidePassword(!hidePassword)}
            name={hidePassword ? 'eye-outline' : 'eye-off-outline'}
            color="#A2A2A3"
            size={24}
          />
        )}
      </View>
      {error && (
        <Text style={{marginTop: 7, color: colors.red, fontSize: 12}}>
          {error}
        </Text>
      )}
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  label: {
    marginVertical: 5,
    fontSize: 18,
    color: colors.grey,
    fontWeight: '600',
  },
  inputContainer: {
    height: 44,
    backgroundColor: colors.textInputGrey,
    flexDirection: 'row',
    paddingHorizontal: 5,
    borderWidth: 0,
    shadowColor: '#000000',
    shadowOpacity: 0.9,
    shadowRadius: 1,
    elevation: 2,
    alignItems: 'center',
  },
  inputInvalid: {
    backgroundColor: colors.red,
  },
  labelInvalid: {
    color: colors.red,
  },
});
