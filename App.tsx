import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React from 'react';
import { CartProvider } from './scr/context/CartContext';
import AppNavigator from './scr/navigation/AppNavigator';

export default function App() {
  return (
    <CartProvider>
    <SafeAreaView style={{ flex: 1 }}>
      <AppNavigator />
    </SafeAreaView>
    </CartProvider>
  );
}

