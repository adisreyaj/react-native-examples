import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native';
import Constants from 'expo-constants';

import { human, systemWeights } from 'react-native-typography';
import JobSelection from './JobSelection';
const { height } = Dimensions.get('screen');
const Jobs = () => {
  const jobDesc = {
    find: ' Search and apply to your favorite job without any hassle',
    post: 'Find your next best employee. Search from hand picked talents',
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo}>
        <Image
          source={require('../../assets/job/quikjobs.png')}
          resizeMode="contain"
          style={{ height: 50, width: 100 }}
        />
      </View>

      <View style={styles.header}>
        <Image source={require('../../assets/job/job.jpg')} />
      </View>
      <View style={styles.body}>
        <Text
          style={{
            ...styles.interFont,
            ...human.title3Object,
            ...systemWeights.semibold,
            textTransform: 'uppercase',
            color: '#314061',
          }}
        >
          Let's Get Started
        </Text>
        <Text
          style={{
            ...human.largeTitleObject,
            ...systemWeights.bold,
            ...styles.interFont,
            marginTop: 8,
            color: '#172B4E',
          }}
        >
          Find your dream job here
        </Text>
        <View style={{ marginTop: 24 }}>
          <JobSelection color={0} desc={jobDesc.find} />
          <JobSelection type="post" color={1} desc={jobDesc.post} />
        </View>
        <Text
          style={{
            ...human.footnoteObject,
            ...systemWeights.regular,
            ...styles.interFont,
            marginTop: 24,
            textAlign: 'center',
            color: '#172B4E',
          }}
        >
          By Continuing, you are accepting the Terms and Conditons of
        </Text>
        <Text
          style={{
            ...human.footnoteObject,
            ...systemWeights.bold,
            ...styles.interFont,
            marginTop: 4,
            textAlign: 'center',
            color: '#172B4E',
          }}
        >
          QUIK JOBS Inc
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
  },
  logo: {
    position: 'absolute',
    top: Constants.statusBarHeight + 32,
    zIndex: 9,
    paddingLeft: 24,
  },
  header: {
    marginTop: 90,
    alignItems: 'center',
  },

  body: {
    marginTop: 24,
    paddingHorizontal: 24,
  },
  interFont: {
    fontFamily: 'Inter',
    letterSpacing: 0.3,
  },
});

export default Jobs;
