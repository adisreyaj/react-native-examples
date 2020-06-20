import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { human } from 'react-native-typography';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

import Contianer from '../../components/hoc/Contianer';
import CreditCard from './CreditCard';
import { cardGradients } from '../../config/colors.config';

const cardLogo = {
  visa: require('../../assets/visa.png'),
  mastercard: require('../../assets/mastercard.png'),
  chase: require('../../assets/chase.png'),
};

const mockData = [
  {
    cardNumber: ['4916', '6366', '0471', '4572'],
    name: 'ADITHYA SREYAJ',
  },
  {
    cardNumber: ['2221', '0021', '0775', '2573'],
    name: 'MAICY WILLIAMS',
  },
  {
    cardNumber: ['3776', '0793', '3932', '2275'],
    name: 'CHRIS EVANS',
  },
];
const Payment = () => {
  return (
    <ScrollView style={{ backgroundColor: ' #C4D4D0' }}>
      <Contianer>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 24,
            paddingVertical: 20,
          }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name="ios-arrow-back" size={24} color="black" />
            <Text style={[human.title1, { fontWeight: '700', marginLeft: 12 }]}>
              Payment
            </Text>
          </View>
          <TouchableOpacity>
            <Entypo name="dots-two-horizontal" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <View>
          <CreditCard
            cardData={mockData[0]}
            image={cardLogo.visa}
            gradient={cardGradients[1]}
            design={3}
          />
          <CreditCard
            cardData={mockData[1]}
            image={cardLogo.mastercard}
            gradient={cardGradients[1]}
            design={1}
          />
          <CreditCard
            cardData={mockData[2]}
            image={cardLogo.chase}
            gradient={cardGradients[0]}
            design={2}
          />
        </View>
      </Contianer>
    </ScrollView>
  );
};

export default Payment;
