import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';

import SCREENS from './src/config/screens.config';
import Payment from './src/screens/Payment/Payments/Payment';
import { init } from './src/data/db';
import Jobs from './src/screens/Jobs/Jobs';
import JobSplash from './src/screens/Jobs/JobSplash';
import JobsField from './src/screens/Jobs/JobsField';

init()
  .then(() => console.log('Database Initialized'))
  .catch(console.log);
const Stack = createStackNavigator();
export default function App() {
  let [fontsLoaded] = useFonts({
    'CreditCard': require('./src/assets/fonts/credit-card/CreditCard.ttf'),
    'Inter': require('./src/assets/fonts/Inter-Regular.ttf'),
    'Inter-SemiBold': require('./src/assets/fonts/Inter-Medium.ttf'),
    'Inter-Bold': require('./src/assets/fonts/Inter-Bold.ttf'),
  });

  if (!fontsLoaded) return <AppLoading />;
  else
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName={SCREENS.jobFields} headerMode="none">
          <Stack.Screen
            name={SCREENS.payment}
            component={Payment}
          ></Stack.Screen>
          <Stack.Screen
            name={SCREENS.jobSplash}
            component={JobSplash}
          ></Stack.Screen>
          <Stack.Screen name={SCREENS.job} component={Jobs}></Stack.Screen>
          <Stack.Screen
            name={SCREENS.jobFields}
            component={JobsField}
          ></Stack.Screen>
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
