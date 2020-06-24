import React from 'react';
import {
  Text,
  SafeAreaView,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native';
import Constants from 'expo-constants';
import { human, systemWeights } from 'react-native-typography';
import { LinearGradient } from 'expo-linear-gradient';

import { cardGradients } from './job.config';
const { height } = Dimensions.get('screen');

const JobSplash = () => {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient {...cardGradients[0]} style={styles.gradient1} />
      <LinearGradient {...cardGradients[1]} style={styles.gradient2} />
      <LinearGradient
        {...cardGradients[1]}
        style={[styles.gradient2, { bottom: -380, top: null }]}
      />
      <LinearGradient
        {...cardGradients[0]}
        style={[styles.gradient1, { bottom: -380, top: null }]}
      />
      <Image
        source={require('../../assets/job/quikjobs.png')}
        resizeMode="contain"
        style={styles.logo}
      />
      <Text
        style={[
          human.bodyO,
          systemWeights.regular,
          styles.interFont,
          { marginTop: 8 },
        ]}
      >
        Get that dream job of yours!
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
  },
  logo: { height: 100, marginRight: 16 },
  interFont: {
    fontFamily: 'Inter',
    letterSpacing: 0.3,
  },
  gradient1: {
    position: 'absolute',
    top: -300,
    left: 0,
    transform: [
      {
        rotate: '25deg',
      },
    ],
    width: 500,
    height: 500,
  },
  gradient2: {
    position: 'absolute',
    top: -320,
    left: 0,
    transform: [
      {
        rotate: '75deg',
      },
    ],
    width: 500,
    height: 500,
  },
});

export default JobSplash;
