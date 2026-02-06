import { StyleSheet, Dimensions } from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
const modalWidth = Math.min(screenWidth * 0.85, 350);

const RemoveFromCartModalStyle = StyleSheet.create({
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
  modalTitle: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: screenWidth * 0.05,
    fontWeight: '700',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: screenWidth * 0.04,
    lineHeight: 22,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    gap: 12,
  },
  cancelButton: {
    flex: 1,
    borderRadius: 8,
    padding: 12,
    elevation: 2,
    backgroundColor: 'transparent',
    borderWidth: 1.5,
    alignItems: 'center',
  },
  confirmButton: {
    flex: 1,
    borderRadius: 8,
    padding: 12,
    elevation: 2,
    alignItems: 'center',
  },
  cancelButtonText: {
    fontSize: screenWidth * 0.04,
    fontWeight: '600',
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: screenWidth * 0.04,
    fontWeight: '600',
  },
});

export default RemoveFromCartModalStyle;
