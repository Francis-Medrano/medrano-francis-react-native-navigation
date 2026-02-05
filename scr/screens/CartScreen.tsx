import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BottomBar from '../components/BottomBar';

const CartScreen: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>Cart</Text>
        {/* Add cart items and logic here */}
      </View>
      <BottomBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default CartScreen;
