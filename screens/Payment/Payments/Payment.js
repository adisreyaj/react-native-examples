import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TouchableHighlight,
  Dimensions,
  StyleSheet,
} from 'react-native';

import Contianer from '../../../components/hoc/Contianer';
import { creditCards } from '../../../data/creditcards';
import CreditCardContainer from '../CreditCardContainer';
import PaymentsHeader from './PaymentsHeader';
import { theme } from '../../../config/colors.config';
import { human } from 'react-native-typography';

const Payment = () => {
  const [selection, setSelection] = useState(0);
  const changeSelection = (selection) => setSelection(selection);
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
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          alignItems: 'center',
          width: '100%',
          backgroundColor: '#fff',
          paddingTop: 32,
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          paddingBottom: 60,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '90%',
            alignItems: 'center',
            paddingBottom: 42,
          }}
        >
          <Text style={[human.headline, { color: '#a8a8a8' }]}>
            Total Price
          </Text>
          <Text style={[human.title1, { fontWeight: '700', color: '#09272E' }]}>
            $725.45
          </Text>
        </View>
        <TouchableHighlight
          style={styles.paymentButton}
          activeOpacity={0.8}
          onPress={() => {}}
        >
          <Text style={human.title3White}>Confirm Payment</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  paymentButton: {
    width: '90%',
    alignItems: 'center',
    backgroundColor: theme.primary,
    borderRadius: 8,
    elevation: 15,
    paddingVertical: 20,
  },
});
export default Payment;
