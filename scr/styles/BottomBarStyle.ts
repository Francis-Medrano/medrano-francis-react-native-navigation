import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const BottomBarStyle = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: -1,
    width: width,
    height: 120,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 17,
    paddingBottom: 60
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '700',
  },
});

export default BottomBarStyle;

