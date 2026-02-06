import React, { useState } from 'react';
import { View, Text, FlatList, Pressable, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import BottomBar from '../components/BottomBar';
import RemoveFromCartModal from '../components/RemoveFromCartModal';
import CheckoutButton from '../components/CheckoutButton';
import { useCart } from '../context/CartContext';
import { useTheme } from '../context/ThemeContext';
import CartStyle from '../styles/CartStyle';
import { usePreventGoBack } from '../handler/usePreventGoBack';
import { getImageSource } from '../Item/Items';

type RootStackParamList = {
  Checkout: undefined;
};

type CartScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Checkout'>;

const CartScreen: React.FC = () => {
  const navigation = useNavigation<CartScreenNavigationProp>();
  const { cart, increment, decrement, remove } = useCart();
  const { colors } = useTheme();
  usePreventGoBack();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);
  const [selectedItemName, setSelectedItemName] = useState<string | null>(null);

  const handleDecrement = (itemId: string, itemName: string) => {
    const item = cart.find(i => i.id === itemId);
    if (item && item.quantity === 1) {
      setSelectedItemId(itemId);
      setSelectedItemName(itemName);
      setModalVisible(true);
    } else {
      decrement(itemId);
    }
  };

  const confirmRemove = () => {
    if (selectedItemId) {
      remove(selectedItemId);
      setModalVisible(false);
      setSelectedItemId(null);
      setSelectedItemName(null);
    }
  };

  const cancelRemove = () => {
    setModalVisible(false);
    setSelectedItemId(null);
    setSelectedItemName(null);
  };

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <View style={[CartStyle.container, { backgroundColor: colors.background }]}>
        {cart.length === 0 ? (
          <Text style={{ color: colors.textSecondary, marginTop: 16 }}>Your cart is empty.</Text>
        ) : (
          <>
            <FlatList
              data={cart}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                <View style={[CartStyle.cartItemRow, { backgroundColor: colors.secondary }]}>
                  <Image 
                    source={getImageSource(item.image)} 
                    style={{ width: 40, height: 40, borderRadius: 8, marginRight: 12 }} 
                  />
                  <Text style={[CartStyle.cartItemName, { color: colors.text }]}>{item.name}</Text>
                  <View style={CartStyle.cartItemActions}>
                    <Pressable
                      style={[CartStyle.actionButton, { backgroundColor: colors.secondary }]}
                      onPress={() => handleDecrement(item.id, item.name)}
                    >
                      <Text style={[CartStyle.actionButtonText, { color: colors.text }]}>-</Text>
                    </Pressable>
                    <Text style={[CartStyle.cartItemQuantity, { color: colors.text }]}>{item.quantity}</Text>
                    <Pressable
                      style={[CartStyle.actionButton, { backgroundColor: colors.secondary }]}
                      onPress={() => increment(item.id)}
                    >
                      <Text style={[CartStyle.actionButtonText, { color: colors.text }]}>+</Text>
                    </Pressable>
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
                  <CheckoutButton 
                    onPress={() => {
                      navigation.navigate('Checkout');
                    }}
                    disabled={cart.length === 0}
                  />
                  <View style={{ height: 130 }} />
                </>
              }
            />
          </>
        )}
      </View>

      <RemoveFromCartModal
        visible={modalVisible}
        itemName={selectedItemName}
        onConfirm={confirmRemove}
        onCancel={cancelRemove}
      />

      <BottomBar />
    </View>
  );
};


export default CartScreen;
