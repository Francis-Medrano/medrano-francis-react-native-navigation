import React from 'react';
import { Modal, View, Text, Pressable } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import AddToCartModalStyle from '../styles/AddToCartModalStyle';

interface AddToCartModalProps {
  visible: boolean;
  item: { id: string; name: string; price: number } | null;
  onConfirm: () => void;
  onCancel: () => void;
}

const AddToCartModal: React.FC<AddToCartModalProps> = ({
  visible,
  item,
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
      <View style={[AddToCartModalStyle.centeredView, { backgroundColor: colors.text + '40' }]}>
        <View
          style={[
            AddToCartModalStyle.modalView,
            { backgroundColor: colors.background, borderColor: colors.border },
          ]}
        >
          <Text style={[AddToCartModalStyle.modalTitle, { color: colors.text }]}>
            Add to Cart
          </Text>
          <Text style={[AddToCartModalStyle.modalText, { color: colors.text }]}>
            Are you sure you want to add {' '}
            <Text style={{ fontWeight: 'bold' }}>{item?.name}</Text>
            {' '} to your cart?
          </Text>
          <Text style={[AddToCartModalStyle.modalPrice, { color: colors.text }]}>
            Price:{' '}
            <Text style={{ fontWeight: 'bold' }}>₱{item?.price}</Text>
          </Text>
          <View style={AddToCartModalStyle.buttonContainer}>
            <Pressable
              style={[AddToCartModalStyle.cancelButton, { borderColor: colors.border }]}
              onPress={onCancel}
            >
              <Text style={[AddToCartModalStyle.cancelButtonText, { color: colors.text }]}>
                Cancel
              </Text>
            </Pressable>
            <Pressable
              style={[AddToCartModalStyle.confirmButton, { backgroundColor: colors.primary }]}
              onPress={onConfirm}
            >
              <Text style={AddToCartModalStyle.confirmButtonText}>Confirm</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AddToCartModal;
