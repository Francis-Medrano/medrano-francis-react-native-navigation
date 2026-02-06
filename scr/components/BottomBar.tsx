import React from 'react';
import { View, Pressable, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MaterialIcons } from '@react-native-vector-icons/material-icons';
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
    <View style={[BottomBarStyle.container, { 
      backgroundColor: theme === 'dark' ? colors.secondary : '#FAFBFC',
      borderTopColor: colors.border,
      borderTopWidth: 1,
    }]}>
      <Pressable
        style={BottomBarStyle.button}
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'Home' }],
          })
        }
      >
        <MaterialIcons name="home" color={colors.text} size={30} />
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
        <MaterialIcons name="shopping-cart" color={colors.text} size={30} />
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
         <MaterialIcons name="settings" color={colors.text} size={30} />
      </Pressable>
    </View>
  );
};

export default BottomBar;
