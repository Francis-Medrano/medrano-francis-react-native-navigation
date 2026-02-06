import React, { useState } from 'react';
import { Text, View, FlatList, Pressable, Image, TextInput } from 'react-native';
import HomeStyle, { ITEM_WIDTH } from '../styles/HomeStyle';
import itemsData from '../../items.json';
import { useCart } from '../context/CartContext';
import { useTheme } from '../context/ThemeContext';
import BottomBar from '../components/BottomBar';
import AddToCartModal from '../components/AddToCartModal';
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

  const getImageSource = (imageName: string) => {
    const imageMap: { [key: string]: any } = {
      apple: require('../../assets/apple.jpeg'),
      banana: require('../../assets/banana.jpeg'),
      orange: require('../../assets/orange.jpeg'),
      milk: require('../../assets/milk.jpeg'),
      bread: require('../../assets/bread.jpeg'),
      eggs: require('../../assets/eggs.jpeg'),
      rice: require('../../assets/rice.jpeg'),
      coffee: require('../../assets/coffee.jpeg'),
      sugar: require('../../assets/sugar.jpeg'),
      butter: require('../../assets/butter.jpeg'),
    };
    return imageMap[imageName] || null;
  };

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
        <Text style={HomeStyle.addToCartButtonText}>Add to Cart</Text>
      </Pressable>
    </View>
  );

  return (
    <View style={[HomeStyle.container, { backgroundColor: colors.background }]}>
      <TextInput
        style={[
          HomeStyle.searchBar,
          {
            backgroundColor: colors.secondary,
            color: colors.text,
            borderColor: colors.border,
          },
        ]}
        placeholder="Search items..."
        placeholderTextColor={colors.textSecondary}
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
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


