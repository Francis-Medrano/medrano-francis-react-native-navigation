import React from 'react';
import { Modal, View, Text, Pressable } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import CheckoutModalStyle from '../styles/CheckoutModalStyle';

interface CheckoutModalProps {
  visible: boolean;
  total: number;
  onConfirm: () => void;
  onCancel: () => void;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({
  visible,
  total,
  onConfirm,
  onCancel,
}) => {
  const { colors } = useTheme();

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onCancel}
    >
      <View style={[CheckoutModalStyle.centeredView, { backgroundColor: colors.text + '40' }]}>
        <View
          style={[
            CheckoutModalStyle.modalView,
            { backgroundColor: colors.background, borderColor: colors.border },
          ]}
        >
          <Text style={[CheckoutModalStyle.modalTitle, { color: colors.text }]}>
            Confirm Checkout
          </Text>
          <Text style={[CheckoutModalStyle.modalText, { color: colors.text }]}>
            Proceed with checkout?
          </Text>
          <Text style={[CheckoutModalStyle.totalText, { color: colors.text }]}>
            Total Amount: <Text style={{ fontWeight: 'bold' }}>₱{total}</Text>
          </Text>
          <View style={CheckoutModalStyle.buttonContainer}>
            <Pressable
              style={[CheckoutModalStyle.cancelButton, { borderColor: colors.border }]}
              onPress={onCancel}
            >
              <Text style={[CheckoutModalStyle.cancelButtonText, { color: colors.text }]}>
                Cancel
              </Text>
            </Pressable>
            <Pressable
              style={[CheckoutModalStyle.confirmButton, { backgroundColor: colors.accent }]}
              onPress={onConfirm}
            >
              <Text style={CheckoutModalStyle.confirmButtonText}>Checkout</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CheckoutModal;
