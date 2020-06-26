import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  Animated,
  Easing,
  SafeAreaView,
} from 'react-native';
import Constants from 'expo-constants';
import { human } from 'react-native-typography';
import { Entypo } from '@expo/vector-icons';

import StorageSeach from './StorageSeach';
import StorageMyDrives from './StorageMyDrives';
import { storageTheme, folderData } from '../config/config';

const StorageHome = () => {
  let start = [...folderData, true].map(() => new Animated.Value(0));
  const headerValue = new Animated.Value(0);
  const folderHeadingValue = new Animated.Value(0);
  const searchValue = new Animated.Value(0);
  const folderValue = new Animated.Value(0);
  useEffect(() => {
    headerValue.setValue(0);
    folderValue.setValue(0);
    folderHeadingValue.setValue(0);
    searchValue.setValue(0);
    Animated.timing(headerValue, {
      toValue: 1,
      duration: 700,
      easing: Easing.bezier(0.17, 0.67, 0.82, 0.98),
    }).start();
    Animated.timing(searchValue, {
      toValue: 1,
      duration: 700,
      delay: 300,
      easing: Easing.bezier(0.17, 0.67, 0.82, 0.98),
    }).start();
    Animated.timing(folderHeadingValue, {
      toValue: 1,
      duration: 700,
      delay: 500,
      easing: Easing.bezier(0.17, 0.67, 0.82, 0.98),
    }).start();

    Animated.timing(folderValue, {
      toValue: 1,
      duration: 400,
      delay: 800,
      easing: Easing.bezier(0.17, 0.67, 0.82, 0.98),
    }).start();

    // Reset all the values to 0 on load
    start.forEach((value) => value.setValue(0));

    // Create an array of animations for all the values
    const animations = start.map((value) =>
      Animated.timing(value, {
        toValue: 1,
        duration: 500,
        easing: Easing.bezier(0.17, 0.67, 0.82, 0.98),
      })
    );

    // Stagger the animations with a 200ms delay
    setTimeout(() => {
      Animated.stagger(200, animations).start();
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
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
        <Animated.View
          style={{
            transform: [
              {
                translateX: headerValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [-50, 0],
                }),
              },
            ],
          }}
        >
          <Text style={[human.title1, styles.inter, { fontWeight: '700' }]}>Hi Adithya!</Text>
          <Text style={[human.body, styles.inter]}>Lets manage your files...</Text>
        </Animated.View>
        <Animated.View
          style={{
            transform: [
              {
                translateX: headerValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [50, 0],
                }),
              },
            ],
          }}
        >
          <Entypo name="menu" size={32} color="black" />
        </Animated.View>
      </View>
      <Animated.View
        style={{
          opacity: searchValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
          }),
          transform: [
            {
              translateY: searchValue.interpolate({
                inputRange: [0, 1],
                outputRange: [-50, 0],
              }),
            },
          ],
        }}
      >
        <StorageSeach />
      </Animated.View>
      <Animated.View
        style={{
          marginHorizontal: 24,
          marginTop: 32,
          opacity: folderHeadingValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
          }),
          transform: [
            {
              translateY: folderHeadingValue.interpolate({
                inputRange: [0, 1],
                outputRange: [50, 0],
              }),
            },
          ],
        }}
      >
        <Text
          style={[human.title3, styles.inter, { fontWeight: '700', color: storageTheme.textDark }]}
        >
          My Storage
        </Text>
      </Animated.View>
      <Animated.View
        style={{
          transform: [
            {
              translateX: folderValue.interpolate({
                inputRange: [0, 1],
                outputRange: [500, 0],
              }),
            },
          ],
        }}
      >
        <StorageMyDrives loadAnimValue={headerValue} />
      </Animated.View>
      <View>
        <View style={{ marginHorizontal: 10 }}>
          <Animated.View
            style={{
              opacity: start[0].interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1],
              }),
              transform: [
                {
                  translateY: start[0].interpolate({
                    inputRange: [0, 1],
                    outputRange: [50, 0],
                  }),
                },
              ],
            }}
          >
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
          </Animated.View>
          <View>
            <FlatList
              data={folderData}
              keyExtractor={(item) => `${item.id}`}
              numColumns={2}
              renderItem={({ item, index }) => (
                <Animated.View
                  style={{
                    width: '50%',
                    padding: 8,
                    opacity: start[index + 1].interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, 1],
                    }),
                    transform: [
                      {
                        translateY: start[index + 1].interpolate({
                          inputRange: [0, 1],
                          outputRange: [50, 0],
                        }),
                      },
                    ],
                  }}
                >
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
                </Animated.View>
              )}
            />
          </View>
        </View>
      </View>
    </View>
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
