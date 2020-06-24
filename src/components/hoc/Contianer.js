import React from 'react';
import { View, Text } from 'react-native';
import Constants from 'expo-constants';
const Contianer = ({ children }) => {
  return (
    <View
      style={{
        paddingTop: Constants.statusBarHeight,
      }}
    >
      {children}
    </View>
  );
};

export default Contianer;
