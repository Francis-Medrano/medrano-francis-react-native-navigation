import React from 'react';
import { Text, View, FlatList, Pressable } from 'react-native';
import HomeStyle, { ITEM_WIDTH } from '../styles/HomeStyle';
import itemsData from '../../items.json';
import BottomBar from '../components/BottomBar';

const items = itemsData.map((item, i) => ({
  id: i.toString(),
  name: item.name,
  price: item.price,
}));

export default function HomeScreen() {
  const renderItem = ({ item }: { item: { id: string; name: string; price: number } }) => (
    <Pressable style={HomeStyle.item}>
      <Text style={HomeStyle.itemText}>{item.name}</Text>
      <Text style={{ fontSize: 16, color: '#888', marginTop: 8 }}>₱{item.price}</Text>
    </Pressable>
  );

  return (
    <View style={HomeStyle.container}>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={[HomeStyle.list, { paddingTop: 20 }]}
        columnWrapperStyle={HomeStyle.row}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<View style={{ height: 120 }} />}
      />
      <BottomBar />
    </View>
  );
}


