import { StyleSheet, Dimensions } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');
const ITEM_MARGIN = 16;
const ITEM_WIDTH = (screenWidth - ITEM_MARGIN * 3) / 2;

const HomeStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  list: {
    alignItems: 'center',
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: ITEM_MARGIN,
  },
  item: {
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: ITEM_MARGIN / 2,
    elevation: 2,
    width: ITEM_WIDTH,
  },
  itemText: {
    fontSize: 18,
    fontWeight: '500',
  },
  addToCartButton: {
    marginTop: 12,
    backgroundColor: '#1000ee',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 6,
  },
  addToCartButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export { ITEM_WIDTH, ITEM_MARGIN };
export default HomeStyle;
