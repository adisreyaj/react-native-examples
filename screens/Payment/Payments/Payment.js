import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TouchableHighlight,
  Dimensions,
  StyleSheet,
} from 'react-native';
import { human } from 'react-native-typography';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import Animated, { Easing, Extrapolate } from 'react-native-reanimated';
import { Ionicons } from '@expo/vector-icons';

import Contianer from '../../../components/hoc/Contianer';
import { creditCards } from '../../../data/creditcards';
import CreditCardContainer from '../CreditCardContainer';
import PaymentsHeader from './PaymentsHeader';
import { theme } from '../../../config/colors.config';
import RadioButton from '../../../components/ui/RadioButton';

const Payment = () => {
  const [selection, setSelection] = useState(-1);
  const [bottomSheetOpen, setBottomSheetOpen] = useState(false);

  const transY = useRef(new Animated.Value(0)).current;
  const changeSelection = (selection) => setSelection(selection);

  const handleGestureEvent = Animated.event([
    { nativeEvent: { translationY: transY } },
  ]);
  const bottomSheet = Animated.interpolate(transY, {
    inputRange: [-250, 0],
    outputRange: [0, 280],
    extrapolate: Extrapolate.CLAMP,
  });

  const handleStateChange = (e) => {
    const { oldState, translationY } = e.nativeEvent;
    if (oldState === State.ACTIVE) {
      Animated.timing(transY, {
        toValue: translationY < 0 ? -250 : 0,
        duration: 400,
        easing: Easing.bezier(0.34, 1.2, 0.87, 0.97),
      }).start();
      setBottomSheetOpen(() => translationY < 0);
    }
  };

  return (
    <View
      style={{
        height: Dimensions.get('screen').height,
      }}
    >
      <ScrollView style={{ backgroundColor: theme.background }}>
        <Contianer>
          <PaymentsHeader />
          <View>
            {creditCards.map((item, i) => (
              <TouchableOpacity
                onPress={() => changeSelection(i)}
                activeOpacity={0.9}
              >
                <CreditCardContainer {...item} selected={i === selection} />
              </TouchableOpacity>
            ))}
          </View>
        </Contianer>
      </ScrollView>
      <PanGestureHandler onHandlerStateChange={handleStateChange}>
        <Animated.View
          style={[
            styles.bottomSheet,
            {
              transform: [
                {
                  translateY: bottomSheet,
                },
              ],
            },
          ]}
        >
          <View style={styles.bottomSheetContent}>
            <Text style={[human.headline, { color: '#a8a8a8' }]}>
              Total Price
            </Text>
            <View
              style={{
                alignItems: 'center',
                marginTop: -80,
                backgroundColor: '#fff',
                width: 60,
                height: 60,
                borderRadius: 60,
                paddingTop: 8,
              }}
            >
              <Ionicons
                style={{
                  transform: [
                    {
                      rotate: '0deg',
                    },
                  ],
                }}
                name={bottomSheetOpen ? 'ios-arrow-down' : 'ios-arrow-up'}
                size={24}
                color="black"
              />
              <Text>Swipe</Text>
            </View>
            <Text
              style={[human.title1, { fontWeight: '700', color: '#09272E' }]}
            >
              $725.45
            </Text>
          </View>
          {bottomSheetOpen && (
            <Animated.View
              style={{
                width: '100%',
                alignItems: 'center',
                marginBottom: 32,
                transform: [
                  {
                    translateY: bottomSheet,
                  },
                ],
              }}
            >
              <View style={{ flexDirection: 'row', marginBottom: 24 }}>
                <View
                  style={{
                    backgroundColor: '#f4f4f4',
                    padding: 12,
                    margin: 8,
                    borderColor: theme.primary,
                    borderWidth: 2,
                    borderStyle: 'dashed',
                    borderRadius: 8,
                    flex: 0.3,
                    paddingBottom: 16,
                    paddingTop: 52,
                  }}
                >
                  <View style={{ position: 'absolute', top: 12, left: 12 }}>
                    <RadioButton selected={true} />
                  </View>
                  <Text
                    style={[
                      human.title1,
                      { fontWeight: '700', marginBottom: 4 },
                    ]}
                  >
                    50% off
                  </Text>
                  <Text>above $99</Text>
                </View>
                <View
                  style={{
                    backgroundColor: '#f4f4f4',
                    padding: 12,
                    margin: 8,
                    borderColor: theme.primary,
                    borderWidth: 2,
                    borderStyle: 'dashed',
                    borderRadius: 8,
                    flex: 0.3,
                    paddingBottom: 16,
                    paddingTop: 52,
                  }}
                >
                  <View style={{ position: 'absolute', top: 12, left: 12 }}>
                    <RadioButton />
                  </View>
                  <Text
                    style={[
                      human.title1,
                      { fontWeight: '700', marginBottom: 4 },
                    ]}
                  >
                    $5 off
                  </Text>
                  <Text>above $35</Text>
                </View>
                <View
                  style={{
                    backgroundColor: '#f4f4f4',
                    padding: 12,
                    margin: 8,
                    borderColor: theme.primary,
                    borderWidth: 2,
                    borderStyle: 'dashed',
                    borderRadius: 8,
                    flex: 0.3,
                    paddingBottom: 16,
                    paddingTop: 52,
                  }}
                >
                  <View style={{ position: 'absolute', top: 12, left: 12 }}>
                    <RadioButton />
                  </View>
                  <Text
                    style={[
                      human.title1,
                      { fontWeight: '700', marginBottom: 4 },
                    ]}
                  >
                    20% off
                  </Text>
                  <Text>above $19</Text>
                </View>
              </View>
              <TouchableHighlight
                style={[
                  styles.paymentButton,
                  {
                    backgroundColor: '#fff',
                    elevation: 0,
                  },
                ]}
                activeOpacity={0.8}
                onPress={() => {}}
              >
                <Text style={human.title3}>Apply Coupon</Text>
              </TouchableHighlight>
            </Animated.View>
          )}
          <TouchableHighlight
            style={styles.paymentButton}
            activeOpacity={0.8}
            onPress={() => {}}
          >
            <Text style={human.title3White}>Confirm Payment</Text>
          </TouchableHighlight>
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomSheet: {
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    width: '100%',
    height: 500,
    backgroundColor: '#fff',
    paddingTop: 32,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingBottom: 60,
    elevation: 20,
  },
  bottomSheetContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    alignItems: 'center',
    paddingBottom: 42,
  },
  paymentButton: {
    width: '90%',
    alignItems: 'center',
    backgroundColor: theme.primary,
    borderRadius: 8,
    elevation: 15,
    paddingVertical: 20,
    borderColor: theme.primary,
    borderWidth: 2,
  },
});
export default Payment;
