import React, { useState } from 'react';
import { Text, View, FlatList, Pressable, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { MaterialIcons } from '@react-native-vector-icons/material-icons';
import HomeStyle, { ITEM_WIDTH } from '../styles/HomeStyle';
import itemsData, { getImageSource } from '../Item/Items';
import { useCart } from '../context/CartContext';
import { useTheme } from '../context/ThemeContext';
import BottomBar from '../components/BottomBar';
import AddToCartModal from '../components/AddToCartModal';
import SearchBar from '../components/SearchBar';
import { usePreventGoBack } from '../handler/usePreventGoBack';

const items = itemsData.map((item, i) => ({
  id: i.toString(),
  name: item.name,
  price: item.price,
  image: item.image,
}));

export default function HomeScreen() {
  const { addToCart } = useCart();
  const { colors } = useTheme();
  usePreventGoBack();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState<{ id: string; name: string; price: number } | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

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

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderItem = ({ item }: { item: { id: string; name: string; price: number; image: string } }) => (
    <View style={[HomeStyle.item, { backgroundColor: colors.secondary }]}>
      {item.image && (
        <Image source={getImageSource(item.image)} style={HomeStyle.itemImage} />
      )}
      <Text style={[HomeStyle.itemText, { color: colors.text }]}>{item.name}</Text>
      <Text style={{ fontSize: 16, color: colors.textSecondary, marginTop: 8 }}>₱{item.price}</Text>
      <Pressable
        style={[HomeStyle.addToCartButton, { backgroundColor: colors.primary }]}
        onPress={() => handleAddToCart(item)}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
          <MaterialIcons name="add-shopping-cart" color="#ffffff" size={20} />
          <Text style={HomeStyle.addToCartButtonText}>Add to Cart</Text>
        </View>
      </Pressable>
    </View>
  );

  return (
    <View style={[HomeStyle.container, { backgroundColor: colors.background }]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'android' ? 'padding' : 'height'}
        style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.OS === 'android' ? 10 : 0}
      >
        <SearchBar value={searchQuery} onChangeText={setSearchQuery} noResults={searchQuery.length > 0 && filteredItems.length === 0} />
        <FlatList
          data={filteredItems}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={2}
          contentContainerStyle={[HomeStyle.list, { paddingTop: 20 }]}
          columnWrapperStyle={HomeStyle.row}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={<View style={{ height: 130 }} />}
        />
      </KeyboardAvoidingView>

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


