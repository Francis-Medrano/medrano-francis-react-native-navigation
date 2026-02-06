import React from 'react';
import { Text, View, FlatList, Pressable, TouchableOpacity } from 'react-native';
import HomeStyle, { ITEM_WIDTH } from '../styles/HomeStyle';
import itemsData from '../../items.json';
import { useCart } from '../context/CartContext';
import { useTheme } from '../context/ThemeContext';
import BottomBar from '../components/BottomBar';

const items = itemsData.map((item, i) => ({
  id: i.toString(),
  name: item.name,
  price: item.price,
}));

export default function HomeScreen() {
  const { addToCart } = useCart();
  const { colors } = useTheme();
  const renderItem = ({ item }: { item: { id: string; name: string; price: number } }) => (
    <View style={[HomeStyle.item, { backgroundColor: colors.secondary }]}>
      <Text style={[HomeStyle.itemText, { color: colors.text }]}>{item.name}</Text>
      <Text style={{ fontSize: 16, color: colors.text + '80', marginTop: 8 }}>₱{item.price}</Text>
      <TouchableOpacity
        style={HomeStyle.addToCartButton}
        onPress={() => addToCart(item)}
      >
        <Text style={HomeStyle.addToCartButtonText}>Add to Cart</Text>
      </TouchableOpacity>
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
      <BottomBar />
    </View>
  );
}


