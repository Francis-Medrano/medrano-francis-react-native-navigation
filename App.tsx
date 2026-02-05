import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React from 'react';
import AppNavigator from './scr/navigation/AppNavigator';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AppNavigator />
    </SafeAreaView>
  );
}

