import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { human } from 'react-native-typography';

const CreditCardFooter = ({ name, expiry }) => {
  return (
    <View style={styles.creditCardFooter}>
      <View>
        <Text
          style={[
            human.caption1,
            { color: 'rgba(255,255,255,0.5)', marginBottom: 4 },
          ]}
        >
          Card Holder
        </Text>
        <Text style={human.bodyWhite}>{name}</Text>
      </View>
      <View>
        <Text
          style={[
            human.caption1,
            { color: 'rgba(255,255,255,0.5)', marginBottom: 4 },
          ]}
        >
          Expiry
        </Text>
        <Text style={human.bodyWhite}>{expiry}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  creditCardFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
});

export default CreditCardFooter;
