import React from 'react';
import { View, Text, FlatList, Pressable, Image, ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MaterialIcons } from '@react-native-vector-icons/material-icons';
import { useCart } from '../context/CartContext';
import { useTheme } from '../context/ThemeContext';
import CheckoutScreenStyle from '../styles/CheckoutScreenStyle';
import CheckoutModal from '../components/CheckoutModal';
import CheckoutSuccessModal from '../components/CheckoutSuccessModal';
import { getImageSource } from '../Item/Items';

type RootStackParamList = {
  Checkout: undefined;
  Home: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Checkout'>;

const CheckoutScreen: React.FC<Props> = ({ navigation }) => {
  const { cart, clear } = useCart();
  const { colors } = useTheme();
  const [checkoutModalVisible, setCheckoutModalVisible] = React.useState(false);
  const [successModalVisible, setSuccessModalVisible] = React.useState(false);

  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const itemCount = cart.length;
  const taxAmount = totalAmount * 0.12;
  const finalTotal = totalAmount + taxAmount;

  const handleConfirmOrder = () => {
    setCheckoutModalVisible(true);
  };

  const confirmCheckout = () => {
    clear();
    setCheckoutModalVisible(false);
    setSuccessModalVisible(true);
  };

  const cancelCheckout = () => {
    setCheckoutModalVisible(false);
  };

  const dismissSuccessModal = () => {
    setSuccessModalVisible(false);
    navigation.navigate('Home');
  };

  return (
    <View style={[CheckoutScreenStyle.container, { backgroundColor: colors.background }]}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={true}
      >
        {/* Receipt Header */}
        <View style={[CheckoutScreenStyle.receiptHeader, { backgroundColor: colors.secondary }]}>
          <MaterialIcons name="receipt" color={colors.text} size={32} />
          <Text style={[CheckoutScreenStyle.headerTitle, { color: colors.text }]}>Order Receipt</Text>
        </View>

        {/* Order Details */}
        <View style={[CheckoutScreenStyle.orderDetailsSection, { borderBottomColor: colors.textSecondary }]}>
          <View style={CheckoutScreenStyle.detailRow}>
            <Text style={[CheckoutScreenStyle.detailLabel, { color: colors.textSecondary }]}>Order ID:</Text>
            <Text style={[CheckoutScreenStyle.detailValue, { color: colors.text }]}>#ORD{Date.now().toString().slice(-6)}</Text>
          </View>
          <View style={CheckoutScreenStyle.detailRow}>
            <Text style={[CheckoutScreenStyle.detailLabel, { color: colors.textSecondary }]}>Date:</Text>
            <Text style={[CheckoutScreenStyle.detailValue, { color: colors.text }]}>{new Date().toLocaleDateString()}</Text>
          </View>
          <View style={CheckoutScreenStyle.detailRow}>
            <Text style={[CheckoutScreenStyle.detailLabel, { color: colors.textSecondary }]}>Items:</Text>
            <Text style={[CheckoutScreenStyle.detailValue, { color: colors.text }]}>{itemCount}</Text>
          </View>
        </View>

        {/* Items List */}
        <View style={CheckoutScreenStyle.itemsSection}>
          <Text style={[CheckoutScreenStyle.sectionTitle, { color: colors.text }]}>Items</Text>
          <FlatList
            data={cart}
            keyExtractor={item => item.id}
            scrollEnabled={false}
            renderItem={({ item }) => (
              <View style={[CheckoutScreenStyle.receiptItem, { backgroundColor: colors.secondary }]}>
                <Image 
                  source={getImageSource(item.image)} 
                  style={CheckoutScreenStyle.itemImage}
                />
                <View style={CheckoutScreenStyle.itemDetails}>
                  <Text style={[CheckoutScreenStyle.itemName, { color: colors.text }]}>{item.name}</Text>
                  <Text style={[CheckoutScreenStyle.itemPrice, { color: colors.textSecondary }]}>
                    ₱{item.price} × {item.quantity}
                  </Text>
                </View>
                <Text style={[CheckoutScreenStyle.itemTotal, { color: colors.text }]}>
                  ₱{(item.price * item.quantity).toFixed(2)}
                </Text>
              </View>
            )}
            contentContainerStyle={{ gap: 8 }}
          />
        </View>

        {/* Summary Section */}
        <View style={[CheckoutScreenStyle.summarySection, { borderTopColor: colors.textSecondary }]}>
          <View style={CheckoutScreenStyle.summaryRow}>
            <Text style={[CheckoutScreenStyle.summaryLabel, { color: colors.textSecondary }]}>Subtotal:</Text>
            <Text style={[CheckoutScreenStyle.summaryValue, { color: colors.text }]}>₱{totalAmount.toFixed(2)}</Text>
          </View>
          <View style={CheckoutScreenStyle.summaryRow}>
            <Text style={[CheckoutScreenStyle.summaryLabel, { color: colors.textSecondary }]}>Tax (12%):</Text>
            <Text style={[CheckoutScreenStyle.summaryValue, { color: colors.text }]}>₱{taxAmount.toFixed(2)}</Text>
          </View>
          <View style={[CheckoutScreenStyle.totalRow, { backgroundColor: colors.accent || colors.text }]}>
            <Text style={[CheckoutScreenStyle.totalLabel, { color: colors.background }]}>Total:</Text>
            <Text style={[CheckoutScreenStyle.totalValue, { color: colors.background }]}>₱{finalTotal.toFixed(2)}</Text>
          </View>
        </View>
      </ScrollView>

      {/* Action Buttons */}
      <View style={CheckoutScreenStyle.actionButtonsContainer}>
        <Pressable
          style={[CheckoutScreenStyle.cancelButton, { backgroundColor: colors.secondary }]}
          onPress={() => navigation.goBack()}
        >
          <Text style={[CheckoutScreenStyle.cancelButtonText, { color: colors.text }]}>Cancel</Text>
        </Pressable>
        <Pressable
          style={[CheckoutScreenStyle.confirmButton, { backgroundColor: colors.text }]}
          onPress={handleConfirmOrder}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, justifyContent: 'center' }}>
            <MaterialIcons name="check-circle" color={colors.background} size={20} />
            <Text style={[CheckoutScreenStyle.confirmButtonText, { color: colors.background }]}>Confirm Order</Text>
          </View>
        </Pressable>
      </View>

      <CheckoutModal
        visible={checkoutModalVisible}
        total={finalTotal}
        onConfirm={confirmCheckout}
        onCancel={cancelCheckout}
      />

      <CheckoutSuccessModal
        visible={successModalVisible}
        onDismiss={dismissSuccessModal}
      />
    </View>
  );
};

export default CheckoutScreen;
