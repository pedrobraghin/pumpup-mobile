import { Text, TextInput, View } from 'react-native';
import { InputProps } from './types';
import { styles } from './styles';
import Colors from '@/constants/Colors';

export function Input({ label, ...rest }: Readonly<InputProps>) {
  function renderLabel() {
    if (!label) return null;

    return (
      <Text style={styles.label}>
        {label}
      </Text>
    )
  }
  return (
    <View style={styles.container}>
      {renderLabel()}
      <TextInput {...rest} style={styles.input} placeholderTextColor={Colors.white} />
    </View>
  )
}