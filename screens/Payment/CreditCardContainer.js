import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { human } from 'react-native-typography';
import Animated, { Easing } from 'react-native-reanimated';

import CreditCard from './CreditCard/CreditCard';
import RadioButton from '../../components/ui/RadioButton';

const CreditCardContainer = (props) => {
  const opacity = new Animated.Value(0);
  const height = new Animated.Value(0);
  const translateY = opacity.interpolate({
    inputRange: [0, 1],
    outputRange: [-60, 0],
    extrapolate: 'clamp',
  });

  const heightAnimation = Animated.interpolate(height, {
    inputRange: [0, 1],
    outputRange: [0, 300],
  });

  const opacityAnimation = Animated.interpolate(opacity, {
    inputRange: [0, 0.4, 1],
    outputRange: [0, 0, 1],
  });
  useEffect(() => {
    Animated.timing(opacity, {
      toValue: props.selected ? 1 : 0,
      duration: 1200,
      easing: Easing.bezier(0.23, 0.67, 0.75, 0.94),
    }).start();

    Animated.timing(height, {
      toValue: props.selected ? 1 : 0,
      duration: 800,
      easing: Easing.bezier(0.47, 0.53, 0.37, 0.96),
    }).start();
  }, [props]);

  return (
    <Animated.View>
      <Animated.View style={{ ...styles.creditCardMeta }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              style={{ width: 80, height: 80 }}
              resizeMode="contain"
              source={props.issuerLogo}
            />
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text
                style={[
                  human.body,
                  { marginLeft: 12, ...styles.creditCardFont },
                ]}
              >
                {[...props.cardNumber].slice(0, 3).join(' ')}
              </Text>
              <Text
                style={{
                  marginLeft: 12,
                  ...styles.creditCardFont,
                  fontSize: 25,
                  marginBottom: 6,
                }}
              >
                XXXX
              </Text>
            </View>
          </View>
          <RadioButton selected={props.selected} />
        </View>
        <Animated.View
          style={{
            ...styles.creditCardContainer,
            opacity: opacityAnimation,
            height: heightAnimation,
            transform: [{ translateY }],
          }}
        >
          <CreditCard {...props} />
        </Animated.View>
      </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  creditCardMeta: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 16,
    margin: 16,
    marginBottom: 0,
    borderColor: '#f4f4f4',
    borderWidth: 1,
    justifyContent: 'center',
  },
  creditCardContainer: {
    marginHorizontal: 8,
    backgroundColor: '#fff',
    borderBottomRightRadius: 4,
    borderBottomLeftRadius: 4,
  },
  creditCardFont: {
    fontFamily: 'CreditCard',
  },
});

export default React.memo(CreditCardContainer);
