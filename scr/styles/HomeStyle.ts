import { StyleSheet, Dimensions } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');
const ITEM_MARGIN = 16;
const ITEM_WIDTH = (screenWidth - ITEM_MARGIN * 3) / 2;

const HomeStyle = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  searchBar: {
    height: screenWidth * 0.12,
    borderRadius: 8,
    paddingHorizontal: screenWidth * 0.04,
    marginHorizontal: screenWidth * 0.02,
    marginTop: screenWidth * 0.04,
    marginBottom: screenWidth * 0.04,
    fontSize: screenWidth * 0.04,
    borderWidth: 1,
  },
  list: {
    alignItems: 'center',
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: ITEM_MARGIN,
  },
  item: {
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
    fontWeight: '600',
  },
  addToCartButton: {
    marginTop: 12,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  addToCartButtonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 14,
  },
  itemImage: {
    width: 120,
    height: 120,
    borderRadius: 8,
    marginBottom: 12,
  },
});

export { ITEM_WIDTH, ITEM_MARGIN };
export default HomeStyle;

