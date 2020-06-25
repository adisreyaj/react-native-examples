import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { storageTheme } from '../config/config';
import { human } from 'react-native-typography';
const StorageSeach = () => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
        <Feather name="search" size={24} color={storageTheme.textLight} />
        <Text style={[human.callout, { color: storageTheme.textLight, marginLeft: 12 }]}>
          Search your files
        </Text>
      </View>
      <Feather name="chevron-down" size={24} color={storageTheme.textLight} />
    </View>
  );
};

export default StorageSeach;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 24,
    backgroundColor: storageTheme.bg,
    height: 60,
    paddingHorizontal: 16,
    borderRadius: 8,
  },

  inter: {
    fontFamily: 'Inter',
  },
});
