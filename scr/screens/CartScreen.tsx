import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import BottomBar from '../components/BottomBar';
import { useCart } from '../context/CartContext';
import { useTheme } from '../context/ThemeContext';
import CartStyle from '../styles/CartStyle';

const CartScreen: React.FC = () => {
  const { cart, increment, decrement, remove } = useCart();
  const { colors } = useTheme();
  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <View style={[CartStyle.container, { backgroundColor: colors.background }]}>
        {cart.length === 0 ? (
          <Text style={{ color: colors.text + '80', marginTop: 16 }}>Your cart is empty.</Text>
        ) : (
          <>
            <FlatList
              data={cart}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                <View style={[CartStyle.cartItemRow, { backgroundColor: colors.secondary }]}>
                  <Text style={[CartStyle.cartItemName, { color: colors.text }]}>{item.name}</Text>
                  <View style={CartStyle.cartItemActions}>
                    <TouchableOpacity
                      style={[CartStyle.actionButton, { backgroundColor: colors.secondary }]}
                      onPress={() => decrement(item.id)}
                    >
                      <Text style={[CartStyle.actionButtonText, { color: colors.text }]}>-</Text>
                    </TouchableOpacity>
                    <Text style={[CartStyle.cartItemQuantity, { color: colors.text }]}>{item.quantity}</Text>
                    <TouchableOpacity
                      style={[CartStyle.actionButton, { backgroundColor: colors.secondary }]}
                      onPress={() => increment(item.id)}
                    >
                      <Text style={[CartStyle.actionButtonText, { color: colors.text }]}>+</Text>
                    </TouchableOpacity>
                  </View>
                  <Text style={[CartStyle.cartItemPrice, { color: colors.text }]}>₱{item.price * item.quantity}</Text>
                </View>
              )}
              style={{ width: '100%', marginTop: 8 }}
              contentContainerStyle={{ paddingHorizontal: 16 }}
              ListFooterComponent={
                <>
                  <View style={{ width: '100%', alignItems: 'flex-end', paddingHorizontal: 24 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: colors.text }}>
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
