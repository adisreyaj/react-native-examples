import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { human } from 'react-native-typography';

const CreditCardHeader = ({ bankName, issuerLogo }) => {
  return (
    <View style={styles.creditCardHeader}>
      <Text style={human.subheadWhite}>{bankName}</Text>
      <Image
        style={{ width: 60, height: 40 }}
        resizeMode="contain"
        source={issuerLogo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  creditCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
export default CreditCardHeader;
