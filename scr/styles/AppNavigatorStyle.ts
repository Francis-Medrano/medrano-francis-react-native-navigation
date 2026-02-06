import { StyleSheet } from 'react-native';
import { ThemeColors } from '../context/ThemeContext';

const createAppNavigatorScreenOptions = (colors: ThemeColors) => ({
  headerStyle: {
    backgroundColor: colors.secondary,
  },
  headerTintColor: colors.text,
  headerTitleStyle: {
    color: colors.text,
    fontWeight: '700' as const,
  },
});

export default createAppNavigatorScreenOptions;
