import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { human } from 'react-native-typography';

const CreditCardBody = ({ cardNumber }) => {
  return (
    <View style={styles.creditCardBody}>
      {cardNumber.map((item, i) => (
        <Text
          key={i}
          style={[
            human.title1White,
            { fontWeight: '500', fontSize: 24, ...styles.creditCardFont },
          ]}
        >
          {item}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  creditCardBody: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  creditCardFont: {
    fontFamily: 'CreditCard',
  },
});

export default CreditCardBody;
