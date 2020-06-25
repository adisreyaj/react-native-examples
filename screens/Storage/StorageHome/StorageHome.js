import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, FlatList, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { human } from 'react-native-typography';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import StorageSeach from './StorageSeach';
import StorageMyDrives from './StorageMyDrives';
import { storageTheme } from '../config/config';

const StorageHome = () => {
  const folderData = [
    {
      id: 1,
      icon: <Entypo name="folder-images" size={40} color={storageTheme.primary} />,
      title: 'Images',
      meta: 'Created 04/2020',
    },
    {
      id: 2,
      icon: <Entypo name="folder-music" size={40} color={storageTheme.primary} />,
      title: 'Music',
      meta: 'Created 02/2020',
    },
    {
      id: 3,
      icon: <Entypo name="folder-video" size={40} color={storageTheme.primary} />,
      title: 'Video',
      meta: 'Created 06/2020',
    },
    {
      id: 4,
      icon: <Entypo name="folder" size={40} color={storageTheme.primary} />,
      title: 'Document',
      meta: 'Created 03/2020',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View
        style={[
          styles.boxed,
          {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: 120,
          },
        ]}
      >
        <View>
          <Text style={[human.title1, styles.inter, { fontWeight: '700' }]}>Hi Adithya!</Text>
          <Text style={[human.body, styles.inter]}>Lets manage your files...</Text>
        </View>
        <Entypo name="menu" size={32} color="black" />
      </View>

      <StorageSeach />
      <StorageMyDrives />
      <View>
        <View style={{ marginHorizontal: 10 }}>
          <Text
            style={[
              human.title3,
              styles.inter,
              {
                fontWeight: '700',
                color: storageTheme.textDark,
                paddingHorizontal: 12,
                marginBottom: 16,
              },
            ]}
          >
            My Folders
          </Text>
          <View>
            <FlatList
              data={folderData}
              keyExtractor={(item) => item.id}
              numColumns={2}
              renderItem={({ item }) => (
                <View style={{ width: '50%', padding: 8 }}>
                  <View
                    style={{
                      backgroundColor: storageTheme.bg,
                      padding: 24,
                      paddingHorizontal: 28,
                      borderRadius: 10,
                    }}
                  >
                    {item.icon}
                    <Text
                      style={[
                        human.headline,
                        {
                          fontSize: 20,
                          marginTop: 16,
                          marginBottom: 2,
                          color: storageTheme.textDark,
                        },
                      ]}
                    >
                      {item.title}
                    </Text>
                    <Text
                      style={[
                        human.footnote,
                        {
                          color: storageTheme.textLight,
                        },
                      ]}
                    >
                      {item.meta}
                    </Text>
                  </View>
                </View>
              )}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
    height: '100%',
  },

  boxed: {
    paddingHorizontal: 24,
  },

  inter: {
    fontFamily: 'Inter',
  },
});
export default StorageHome;
