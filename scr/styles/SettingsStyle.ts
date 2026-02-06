import { StyleSheet, Dimensions } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

const SettingsStyle = StyleSheet.create({
  container: {
    flex: 1,
    padding: screenWidth * 0.05,
  },
  title: {
    fontSize: screenWidth * 0.07,
    fontWeight: '700',
    marginBottom: screenWidth * 0.07,
    marginTop: screenWidth * 0.02,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: screenWidth * 0.045,
    borderBottomWidth: 1,
  },
  settingLabel: {
    fontSize: screenWidth * 0.04,
    fontWeight: '500',
  },
});

export default SettingsStyle;
