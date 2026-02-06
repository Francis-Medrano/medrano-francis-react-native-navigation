

import React from 'react';
import { View, Pressable, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTheme } from '../context/ThemeContext';
import BottomBarStyle from '../styles/BottomBarStyle';

type RootStackParamList = {
  Home: undefined;
  Cart: undefined;
  Settings: undefined;
};


const BottomBar: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { colors, theme } = useTheme();
  
  return (
    <View style={[BottomBarStyle.container, { backgroundColor: theme === 'dark' ? colors.background : '#222' }]}>
      <Pressable
        style={BottomBarStyle.button}
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'Home' }],
          })
        }
      >
        <Text style={[BottomBarStyle.buttonText, { color: colors.text }]}>Home</Text>
      </Pressable>
      <Pressable
        style={BottomBarStyle.button}
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'Cart' }],
          })
        }
      >
        <Text style={[BottomBarStyle.buttonText, { color: colors.text }]}>Cart</Text>
      </Pressable>
      <Pressable
        style={BottomBarStyle.button}
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'Settings' }],
          })
        }
      >
        <Text style={[BottomBarStyle.buttonText, { color: colors.text }]}>Settings</Text>
      </Pressable>
    </View>
  );
};

export default BottomBar;
