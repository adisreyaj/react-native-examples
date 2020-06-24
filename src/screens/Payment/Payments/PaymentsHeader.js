import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { human } from 'react-native-typography';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const PaymentsHeader = () => {
  return (
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
  );
};

export default PaymentsHeader;
