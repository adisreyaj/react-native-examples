import { cardGradients } from '../config/colors.config';

const cardLogo = {
  visa: require('../assets/visa.png'),
  mastercard: require('../assets/mastercard.png'),
  chase: require('../assets/chase.png'),
};

export const creditCards = [
  {
    cardNumber: ['4916', '6366', '0471', '4572'],
    name: 'ADITHYA SREYAJ',
    expiry: '12/20',
    bankName: 'Bank of America',
    type: 'visa',
    issuerLogo: cardLogo.visa,
    design: require('../assets/card-design-4.png'),
    background: cardGradients[1],
  },
  {
    cardNumber: ['2221', '0021', '0775', '2573'],
    name: 'MAICY WILLIAMS',
    expiry: '02/35',
    bankName: 'Virgin America',
    type: 'mastercard',
    issuerLogo: cardLogo.mastercard,
    design: require('../assets/card-design-5.png'),
    background: cardGradients[1],
  },
  {
    cardNumber: ['3776', '0793', '3932', '2275'],
    name: 'CHRIS EVANS',
    expiry: '11/24',
    bankName: 'Apple Inc',
    type: 'chase',
    issuerLogo: cardLogo.chase,
    design: require('../assets/card-design-3.png'),
    background: cardGradients[2],
  },
];
