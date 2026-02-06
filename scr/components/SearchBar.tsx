import React from 'react';
import { TextInput, View, Text } from 'react-native';
import { MaterialIcons } from '@react-native-vector-icons/material-icons';
import { useTheme } from '../context/ThemeContext';
import HomeStyle from '../styles/HomeStyle';

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  noResults?: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChangeText, noResults = false }) => {
  const { colors } = useTheme();

  return (
    <View>
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
      {noResults && value && (
        <Text style={{ color: colors.textSecondary, marginTop: 8, fontStyle: 'italic' }}>
          No items found matching "{value}"
        </Text>
      )}
    </View>
  );
};

export default SearchBar;
