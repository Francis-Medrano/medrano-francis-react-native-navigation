import React from 'react';
import { Modal, View, Text, Pressable } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import CheckoutSuccessModalStyle from '../styles/CheckoutSuccessModalStyle';

interface CheckoutSuccessModalProps {
  visible: boolean;
  onDismiss: () => void;
}

const CheckoutSuccessModal: React.FC<CheckoutSuccessModalProps> = ({
  visible,
  onDismiss,
}) => {
  const { colors } = useTheme();

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onDismiss}
    >
      <View style={[CheckoutSuccessModalStyle.centeredView, { backgroundColor: colors.text + '40' }]}>
        <View
          style={[
            CheckoutSuccessModalStyle.modalView,
            { backgroundColor: colors.background, borderColor: colors.border },
          ]}
        >
          <Text style={[CheckoutSuccessModalStyle.successIcon, { color: colors.accent }]}>✓</Text>
          <Text style={[CheckoutSuccessModalStyle.modalTitle, { color: colors.text }]}>
            Checkout Successful
          </Text>
          <Text style={[CheckoutSuccessModalStyle.modalText, { color: colors.text }]}>
            Your order has been placed successfully. Thank you for shopping!
          </Text>
          <Pressable
            style={[CheckoutSuccessModalStyle.button, { backgroundColor: colors.accent }]}
            onPress={onDismiss}
          >
            <Text style={CheckoutSuccessModalStyle.buttonText}>Done</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default CheckoutSuccessModal;
