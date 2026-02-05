
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import BottomBar from '../components/BottomBar';
import { useCart } from '../context/CartContext';

const CartScreen: React.FC = () => {
  const { cart } = useCart();
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        {cart.length === 0 ? (
          <Text style={{ color: '#888', marginTop: 16 }}>Your cart is empty.</Text>
        ) : (
          <FlatList
            data={cart}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 12 }}>
                <Text style={{ fontSize: 16, flex: 1 }}>{item.name}</Text>
                <Text style={{ fontSize: 16, marginHorizontal: 8 }}>x{item.quantity}</Text>
                <Text style={{ fontSize: 16 }}>₱{item.price * item.quantity}</Text>
              </View>
            )}
            style={{ width: '100%', marginTop: 16 }}
            contentContainerStyle={{ paddingHorizontal: 16 }}
          />
        )}
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
