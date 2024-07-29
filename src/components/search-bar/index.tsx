import { TextInput, TouchableOpacity, View } from 'react-native';
import { SearchBarProps } from './types';
import { styles } from './styles';
import Colors from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';

export function SearchBar({ onChangeText, placeholder }: Readonly<SearchBarProps>) {
  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={styles.input}
        placeholderTextColor={Colors.white}
        cursorColor={Colors.white}
      />
      <TouchableOpacity onPress={() => undefined} style={styles.searchButtonStyle}>
        <Ionicons name="search-outline" size={24} color={Colors.mainColor} />
      </TouchableOpacity>
    </View>
  )
}