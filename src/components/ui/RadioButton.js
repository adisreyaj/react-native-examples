import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../../config/colors.config';

const RadioButton = ({ selected = false }) => {
  return (
    <View style={styles.outerCircle}>
      {selected && <View style={styles.innerCircle}></View>}
    </View>
  );
};

const styles = StyleSheet.create({
  outerCircle: {
    borderColor: theme.primary,
    borderWidth: 2,
    width: 24,
    height: 24,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerCircle: {
    backgroundColor: theme.primary,
    width: 13,
    height: 13,
    borderRadius: 13,
  },
});

export default RadioButton;
