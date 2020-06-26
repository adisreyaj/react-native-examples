import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';

import SCREENS from './config/screens.config';
import Payment from './screens/Payment/Payments/Payment';
import { init } from './data/db';
import Expenses from './screens/Expenses/Expenses';
import Jobs from './screens/Jobs/Jobs';
import JobSplash from './screens/Jobs/JobSplash';
import StorageHome from './screens/Storage/StorageHome/StorageHome';
import StorageSplash from './screens/Storage/StorageHome/StorageSplash';

init()
  .then(() => console.log('Database Initialized'))
  .catch(console.log);
const Stack = createStackNavigator();
export default function App() {
  let [fontsLoaded] = useFonts({
    CreditCard: require('./assets/fonts/credit-card/CreditCard.ttf'),
    Inter: require('./assets/fonts/Inter-Regular.ttf'),
    'Inter-SemiBold': require('./assets/fonts/Inter-Medium.ttf'),
    'Inter-Bold': require('./assets/fonts/Inter-Bold.ttf'),
  });

  if (!fontsLoaded) return <AppLoading />;
  else
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName={SCREENS.storageSplash} headerMode="none">
          <Stack.Screen name={SCREENS.payment} component={Payment}></Stack.Screen>
          <Stack.Screen name={SCREENS.jobSplash} component={JobSplash}></Stack.Screen>
          <Stack.Screen name={SCREENS.job} component={Jobs}></Stack.Screen>
          <Stack.Screen name={SCREENS.storageSplash} component={StorageSplash}></Stack.Screen>
          <Stack.Screen name={SCREENS.storageHome} component={StorageHome}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
