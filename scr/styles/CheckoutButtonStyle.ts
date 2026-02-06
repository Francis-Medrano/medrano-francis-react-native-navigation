import { StyleSheet, Dimensions } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

const CheckoutButtonStyle = StyleSheet.create({
  button: {
    paddingVertical: screenWidth * 0.035,
    paddingHorizontal: screenWidth * 0.06,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: screenWidth * 0.06,
    marginTop: screenWidth * 0.04,
    marginBottom: screenWidth * 0.04,
  },
  buttonText: {
    fontSize: screenWidth * 0.04,
    fontWeight: '600',
  },
});

export default CheckoutButtonStyle;
