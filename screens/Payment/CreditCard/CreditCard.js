import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { cardGradients } from '../../../config/colors.config';
import CreditCardHeader from './CreditCardHeader';
import CreditCardFooter from './CreditCardFooter';
import CreditCardBody from './CreditCardBody';

const CreditCard = ({
  issuerLogo,
  background = cardGradients[0],
  design,
  name,
  cardNumber,
  expiry,
  bankName,
}) => {
  return (
    <Animated.View style={[styles.creditCard]}>
      <LinearGradient {...background} style={styles.creditCardGradient} />
      <View style={styles.creditCardDesign}>
        <Image
          style={{
            width: '100%',
            height: '100%',
          }}
          source={design}
          resizeMode="cover"
        />
      </View>
      <CreditCardHeader bankName={bankName} issuerLogo={issuerLogo} />
      <CreditCardBody cardNumber={cardNumber} />
      <CreditCardFooter name={name} expiry={expiry} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  creditCard: {
    padding: 16,
    paddingHorizontal: 24,
    marginTop: 8,
    marginBottom: 42,
    borderRadius: 12,
    minHeight: 220,
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  creditCardGradient: {
    position: 'absolute',
    borderRadius: 8,
    left: 0,
    right: 0,
    top: 0,
    height: 260,
    zIndex: 0,
  },
  creditCardDesign: {
    position: 'absolute',
    top: 0,
    width: '120%',
    height: 260,
    opacity: 0.5,
    zIndex: 0,
  },
  creditCardFont: {
    fontFamily: 'CreditCard',
  },
});
export default CreditCard;
