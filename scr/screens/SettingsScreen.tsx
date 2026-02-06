import React from 'react';
import { View, Text, Pressable, Switch } from 'react-native';
import { MaterialIcons } from '@react-native-vector-icons/material-icons';
import { useTheme } from '../context/ThemeContext';
import SettingsStyle from '../styles/SettingsStyle';
import BottomBar from '../components/BottomBar';
import { usePreventGoBack } from '../handler/usePreventGoBack';

const SettingsScreen: React.FC = () => {
  const { theme, colors, toggleTheme } = useTheme();
  usePreventGoBack();

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <View style={[SettingsStyle.container, { backgroundColor: colors.background }]}>
        <View style={[SettingsStyle.settingItem, { borderBottomColor: colors.border }]}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
            <MaterialIcons name="dark-mode" color={colors.text} size={20} />
            <Text style={[SettingsStyle.settingLabel, { color: colors.text }]}>
              Dark Mode
            </Text>
          </View>
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
