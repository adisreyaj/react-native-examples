import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { human } from 'react-native-typography';
import { LinearGradient } from 'expo-linear-gradient';
import { cardGradients } from '../../config/colors.config';

const CreditCard = ({
  image,
  gradient = cardGradients[0],
  design = 0,
  cardData,
}) => {
  const cardDesgins = [
    require('../../assets/card-design-1.png'),
    require('../../assets/card-design-2.png'),
    require('../../assets/card-design-3.png'),
    require('../../assets/card-design-4.png'),
  ];

  return (
    <View style={styles.creditCardContainer}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image
          style={{ width: 80, height: 80 }}
          resizeMode="contain"
          source={image}
        />
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text
            style={[human.body, { marginLeft: 12, ...styles.creditCardFont }]}
          >
            {[...cardData?.cardNumber].slice(0, 3).join(' ')}
          </Text>
          <Text
            style={{
              marginLeft: 12,
              ...styles.creditCardFont,
              fontSize: 24,
              marginBottom: 6,
            }}
          >
            XXXX
          </Text>
        </View>
      </View>

      <View style={styles.creditCard}>
        <LinearGradient
          {...gradient}
          style={{
            position: 'absolute',
            borderRadius: 8,
            left: 0,
            right: 0,
            top: 0,
            height: 260,
            zIndex: 0,
          }}
        />
        <View
          style={{
            position: 'absolute',
            top: 0,
            width: '120%',
            height: 260,
            opacity: 0.5,
            zIndex: 0,
          }}
        >
          <Image
            style={{
              width: '100%',
              height: '100%',
            }}
            source={cardDesgins[design]}
            resizeMode="cover"
          />
        </View>
        <View style={styles.creditCardHeader}>
          <Text style={human.subheadWhite}>Bank of America</Text>
          <Image
            style={{ width: 60, height: 40 }}
            resizeMode="contain"
            source={image}
          />
        </View>
        <View style={styles.creditCardBody}>
          {cardData?.cardNumber.map((item) => (
            <Text
              style={[
                human.title1White,
                { fontWeight: '500', fontSize: 24, ...styles.creditCardFont },
              ]}
            >
              {item}
            </Text>
          ))}
        </View>
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
            <Text style={human.bodyWhite}>{cardData?.name}</Text>
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
            <Text style={human.bodyWhite}>12/22</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  creditCardContainer: {
    backgroundColor: '#fff',
    borderRadius: 4,
    paddingHorizontal: 16,
    margin: 16,
  },
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
  creditCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  creditCardBody: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  creditCardFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  creditCardFont: {
    fontFamily: 'CreditCard',
  },
});
export default CreditCard;
