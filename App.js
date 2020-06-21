import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';

import SCREENS from './config/screens.config';
import Payment from './screens/Payment/Payments/Payment';

const Stack = createStackNavigator();
export default function App() {
  let [fontsLoaded] = useFonts({
    CreditCard: require('./assets/fonts/credit-card/CreditCard.ttf'),
  });

  if (!fontsLoaded) return <AppLoading />;
  else
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName={SCREENS.payment} headerMode="none">
          <Stack.Screen
            name={SCREENS.payment}
            component={Payment}
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
