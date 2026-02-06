import React, { useState } from 'react';
import { Text, View, FlatList, Pressable } from 'react-native';
import HomeStyle, { ITEM_WIDTH } from '../styles/HomeStyle';
import itemsData from '../../items.json';
import { useCart } from '../context/CartContext';
import { useTheme } from '../context/ThemeContext';
import BottomBar from '../components/BottomBar';
import AddToCartModal from '../components/AddToCartModal';

const items = itemsData.map((item, i) => ({
  id: i.toString(),
  name: item.name,
  price: item.price,
}));

export default function HomeScreen() {
  const { addToCart } = useCart();
  const { colors } = useTheme();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState<{ id: string; name: string; price: number } | null>(null);

  const handleAddToCart = (item: { id: string; name: string; price: number }) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const confirmAddToCart = () => {
    if (selectedItem) {
      addToCart(selectedItem);
      setModalVisible(false);
      setSelectedItem(null);
    }
  };

  const cancelAddToCart = () => {
    setModalVisible(false);
    setSelectedItem(null);
  };

  const renderItem = ({ item }: { item: { id: string; name: string; price: number } }) => (
    <View style={[HomeStyle.item, { backgroundColor: colors.secondary }]}>
      <Text style={[HomeStyle.itemText, { color: colors.text }]}>{item.name}</Text>
      <Text style={{ fontSize: 16, color: colors.textSecondary, marginTop: 8 }}>₱{item.price}</Text>
      <Pressable
        style={[HomeStyle.addToCartButton, { backgroundColor: colors.primary }]}
        onPress={() => handleAddToCart(item)}
      >
        <Text style={HomeStyle.addToCartButtonText}>Add to Cart</Text>
      </Pressable>
    </View>
  );

  return (
    <View style={[HomeStyle.container, { backgroundColor: colors.background }]}>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={[HomeStyle.list, { paddingTop: 20 }]}
        columnWrapperStyle={HomeStyle.row}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<View style={{ height: 130 }} />}
      />

      <AddToCartModal
        visible={modalVisible}
        item={selectedItem}
        onConfirm={confirmAddToCart}
        onCancel={cancelAddToCart}
      />

      <BottomBar />
    </View>
  );
}


