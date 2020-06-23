import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { cardGradients } from './job.config';
import { human, systemWeights } from 'react-native-typography';

const JobSelectionIcon = ({ type }) => {
  return (
    <View style={styles.icon}>
      <MaterialCommunityIcons
        name={type === 'find' ? 'briefcase-search' : 'file-document-box-search'}
        size={24}
        color="#fff"
      />
    </View>
  );
};

const JobSelection = ({ type = 'find', color = 0, desc }) => {
  return (
    <View style={styles.container}>
      <LinearGradient {...cardGradients[color]} style={styles.gradient} />
      <View style={styles.content}>
        <JobSelectionIcon type={type} />
        <View style={{ marginLeft: 16 }}>
          <Text
            style={[
              human.title2White,
              systemWeights.bold,
              styles.interFont,
              { marginBottom: 4, textTransform: 'capitalize' },
            ]}
          >
            {type} a Job
          </Text>
          <Text
            style={[
              styles.interFont,
              human.bodyWhite,
              systemWeights.regular,
              { width: '80%' },
            ]}
            numberOfLines={2}
          >
            {desc}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default JobSelection;

const styles = StyleSheet.create({
  icon: {
    backgroundColor: 'rgba(255,255,255,0.18)',
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '100%',
    height: 120,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginVertical: 16,
    borderRadius: 24,
  },
  gradient: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    opacity: 1,
    height: 120,
    borderRadius: 24,
  },
  content: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  interFont: {
    fontFamily: 'Inter',
    letterSpacing: 0.3,
  },
});
