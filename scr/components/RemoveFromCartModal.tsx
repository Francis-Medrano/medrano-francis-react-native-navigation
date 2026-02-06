import React from 'react';
import { Modal, View, Text, Pressable } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import RemoveFromCartModalStyle from '../styles/RemoveFromCartModalStyle';

interface RemoveFromCartModalProps {
  visible: boolean;
  itemName: string | null;
  onConfirm: () => void;
  onCancel: () => void;
}

const RemoveFromCartModal: React.FC<RemoveFromCartModalProps> = ({
  visible,
  itemName,
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
      <View style={[RemoveFromCartModalStyle.centeredView, { backgroundColor: colors.text + '40' }]}>
        <View
          style={[
            RemoveFromCartModalStyle.modalView,
            { backgroundColor: colors.background, borderColor: colors.border },
          ]}
        >
          <Text style={[RemoveFromCartModalStyle.modalTitle, { color: colors.text }]}>
            Remove Item
          </Text>
          <Text style={[RemoveFromCartModalStyle.modalText, { color: colors.text }]}>
            Remove{'\n'}
            <Text style={{ fontWeight: 'bold' }}>{itemName}</Text>
            {'\n'}from your cart?
          </Text>
          <View style={RemoveFromCartModalStyle.buttonContainer}>
            <Pressable
              style={[RemoveFromCartModalStyle.cancelButton, { borderColor: colors.border }]}
              onPress={onCancel}
            >
              <Text style={[RemoveFromCartModalStyle.cancelButtonText, { color: colors.text }]}>
                Cancel
              </Text>
            </Pressable>
            <Pressable
              style={[RemoveFromCartModalStyle.confirmButton, { backgroundColor: colors.accent }]}
              onPress={onConfirm}
            >
              <Text style={RemoveFromCartModalStyle.confirmButtonText}>Remove</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default RemoveFromCartModal;
