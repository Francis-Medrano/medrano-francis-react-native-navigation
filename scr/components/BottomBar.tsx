
import React from 'react';
import { View, Pressable, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import BottomBarStyle from '../styles/BottomBarStyle';

type RootStackParamList = {
  Home: undefined;
  Cart: undefined;
  // Add other screens if needed
};


const BottomBar: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View style={BottomBarStyle.container}>
      <Pressable
        style={BottomBarStyle.button}
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'Home' }],
          })
        }
      >
        <Text style={BottomBarStyle.buttonText}>Home</Text>
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
        <Text style={BottomBarStyle.buttonText}>Cart</Text>
      </Pressable>
      <Pressable style={BottomBarStyle.button}>
        <Text style={BottomBarStyle.buttonText}>Settings</Text>
      </Pressable>
    </View>
  );
};

export default BottomBar;
