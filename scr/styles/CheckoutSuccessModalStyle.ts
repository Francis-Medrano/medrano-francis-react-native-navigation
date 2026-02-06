import { StyleSheet } from 'react-native';

const CheckoutSuccessModalStyle = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    borderRadius: 16,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    minWidth: 280,
    borderWidth: 1,
  },
  successIcon: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  modalTitle: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '700',
  },
  modalText: {
    marginBottom: 25,
    textAlign: 'center',
    fontSize: 14,
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
    fontSize: 16,
    fontWeight: '600',
  },
});

export default CheckoutSuccessModalStyle;
