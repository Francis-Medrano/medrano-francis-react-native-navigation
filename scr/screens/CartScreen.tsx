import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import BottomBar from '../components/BottomBar';
import { useCart } from '../context/CartContext';
import CartStyle from '../styles/CartStyle';

const CartScreen: React.FC = () => {
  const { cart, increment, decrement, remove } = useCart();
  return (
    <View style={{ flex: 1 }}>
      <View style={CartStyle.container}>
        {cart.length === 0 ? (
          <Text style={{ color: '#888', marginTop: 16 }}>Your cart is empty.</Text>
        ) : (
          <>
            <FlatList
              data={cart}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                <View style={CartStyle.cartItemRow}>
                  <Text style={CartStyle.cartItemName}>{item.name}</Text>
                  <View style={CartStyle.cartItemActions}>
                    <TouchableOpacity
                      style={CartStyle.actionButton}
                      onPress={() => decrement(item.id)}
                    >
                      <Text style={CartStyle.actionButtonText}>-</Text>
                    </TouchableOpacity>
                    <Text style={CartStyle.cartItemQuantity}>{item.quantity}</Text>
                    <TouchableOpacity
                      style={CartStyle.actionButton}
                      onPress={() => increment(item.id)}
                    >
                      <Text style={CartStyle.actionButtonText}>+</Text>
                    </TouchableOpacity>
                  </View>
                  <Text style={CartStyle.cartItemPrice}>₱{item.price * item.quantity}</Text>
                </View>
              )}
              style={{ width: '100%', marginTop: 8 }}
              contentContainerStyle={{ paddingHorizontal: 16 }}
              ListFooterComponent={
                <>
                  <View style={{ width: '100%', alignItems: 'flex-end', paddingHorizontal: 24 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#222' }}>
                      Total Amount: ₱{cart.reduce((sum, item) => sum + item.price * item.quantity, 0)}
                    </Text>
                  </View>
                  <View style={{ height: 130 }} />
                </>
              }
            />
          </>
        )}
      </View>
      <BottomBar />
    </View>
  );
};


export default CartScreen;
