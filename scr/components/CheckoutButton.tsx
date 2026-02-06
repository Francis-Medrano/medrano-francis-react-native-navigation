import React from 'react';
import { Pressable, Text } from 'react-native';
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
      <Text style={[CheckoutButtonStyle.buttonText, { color: colors.background }]}>Checkout</Text>
    </Pressable>
  );
};

export default CheckoutButton;
