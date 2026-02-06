import React from 'react';
import { TextInput, View } from 'react-native';
import { MaterialIcons } from '@react-native-vector-icons/material-icons';
import { useTheme } from '../context/ThemeContext';
import HomeStyle from '../styles/HomeStyle';

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChangeText }) => {
  const { colors } = useTheme();

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <MaterialIcons name="search" color={colors.text} size={30} />
      <TextInput
        style={[
          HomeStyle.searchBar,
          {
            backgroundColor: colors.secondary,
            color: colors.text,
            borderColor: colors.border,
            flex: 1,
            marginLeft: 8,
          },
        ]}
        placeholder="Search items..."
        placeholderTextColor={colors.textSecondary}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default SearchBar;
