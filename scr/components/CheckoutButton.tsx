import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { MaterialIcons } from '@react-native-vector-icons/material-icons';
import { useTheme } from '../context/ThemeContext';
import CheckoutButtonStyle from '../styles/CheckoutButtonStyle';

type CheckoutButtonProps = {
  onPress: () => void;
  disabled?: boolean;
};

const CheckoutButton: React.FC<CheckoutButtonProps> = ({ onPress, disabled = false }) => {
  const { colors } = useTheme();

  return (
    <Pressable
      style={[
        CheckoutButtonStyle.button,
        {
          backgroundColor: disabled ? colors.textSecondary : colors.text,
          opacity: disabled ? 0.5 : 1,
        },
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
        <MaterialIcons name="shopping-cart-checkout" color="#FFFFFF" size={20} />
        <Text style={[CheckoutButtonStyle.buttonText, { color: colors.background }]}>Checkout</Text>
      </View>
    </Pressable>
  );
};

export default CheckoutButton;
