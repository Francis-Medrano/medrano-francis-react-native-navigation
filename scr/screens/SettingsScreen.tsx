import React from 'react';
import { View, Text, Pressable, Switch } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import SettingsStyle from '../styles/SettingsStyle';
import BottomBar from '../components/BottomBar';

const SettingsScreen: React.FC = () => {
  const { theme, colors, toggleTheme } = useTheme();

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <View style={[SettingsStyle.container, { backgroundColor: colors.background }]}>
        <View style={[SettingsStyle.settingItem, { borderBottomColor: colors.border }]}>
          <Text style={[SettingsStyle.settingLabel, { color: colors.text }]}>
            Dark Mode
          </Text>
          <Switch
            value={theme === 'dark'}
            onValueChange={toggleTheme}
            trackColor={{ false: colors.secondary, true: colors.primary }}
            thumbColor={theme === 'dark' ? colors.primary : colors.secondary}
          />
        </View>
      </View>
      <BottomBar />
    </View>
  );
};

export default SettingsScreen;
