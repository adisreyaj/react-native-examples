import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SCREENS from '../../../config/screens.config';

const StorageSplash = () => {
  const start = new Animated.Value(0);
  const navigation = useNavigation();
  useEffect(() => {
    Animated.timing(start, {
      toValue: 1,
      duration: 500,
    }).start();

    setTimeout(() => {
      navigation.navigate(SCREENS.storageHome);
    }, 1200);
  }, []);
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
      }}
    >
      <Animated.View
        style={{
          opacity: start.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
          }),
          transform: [
            {
              translateY: start.interpolate({
                inputRange: [0, 1],
                outputRange: [50, 0],
              }),
            },
          ],
        }}
      >
        <Image
          style={{ width: 200 }}
          resizeMode="contain"
          source={require('../../../assets/storage/fyl.png')}
        />
      </Animated.View>
    </View>
  );
};

export default StorageSplash;

const styles = StyleSheet.create({});
