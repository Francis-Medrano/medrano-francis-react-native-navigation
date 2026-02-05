import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const BottomBarStyle = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: width,
    height: 120,
    backgroundColor: '#222',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 8,
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
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default BottomBarStyle;
