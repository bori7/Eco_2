import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

function IconButton({icon, size, color, onPress}) {
  return (
    <Pressable
      style={({pressed}) => [styles.button, onPress && styles.pressed]}
      onPress={onPress}>
      <Icon name={icon} size={size} color={color} />
    </Pressable>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  button: {
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'flex-start',
  },
  pressed: {
    opacity: 0.7,
  },
});
