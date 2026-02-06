import { StyleSheet, Dimensions } from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
const modalWidth = Math.min(screenWidth * 0.85, 350);

const CheckoutSuccessModalStyle = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: screenWidth * 0.05,
    borderRadius: 16,
    padding: screenHeight * 0.04,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    minWidth: modalWidth,
    borderWidth: 1,
  },
  successIcon: {
    fontSize: screenWidth * 0.12,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  modalTitle: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: screenWidth * 0.05,
    fontWeight: '700',
  },
  modalText: {
    marginBottom: 25,
    textAlign: 'center',
    fontSize: screenWidth * 0.035,
    lineHeight: 20,
  },
  button: {
    borderRadius: 8,
    padding: 12,
    elevation: 2,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: screenWidth * 0.04,
    fontWeight: '600',
  },
});

export default CheckoutSuccessModalStyle;
