import { StyleSheet, Dimensions } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

const CartStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 0,
    width: screenWidth,
    alignSelf: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  cartItemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 6,
    width: screenWidth - 16,
    minHeight: 44,
    alignSelf: 'center',
  },
  cartItemName: {
    flex: 2,
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'left',
    paddingLeft: 4,
  },
  cartItemActions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  cartItemQuantity: {
    fontSize: 16,
    marginHorizontal: 8,
    minWidth: 24,
    textAlign: 'center',
  },
  cartItemPrice: {
    flex: 1,
    fontSize: 16,
    textAlign: 'right',
    paddingRight: 4,
  },
  actionButton: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 4,
    marginHorizontal: 2,
    minWidth: 32,
    alignItems: 'center',
  },
  actionButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CartStyle;

