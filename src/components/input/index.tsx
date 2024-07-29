import { Text, TextInput, View } from 'react-native'
import { InputProps } from './types'
import { styles } from './styles'
import Colors from '@/constants/Colors'

export function Input({
  label,
  error,
  hasError,
  ...rest
}: Readonly<InputProps>) {
  return (
    <View style={styles.container}>
      {label && (
        <Text style={styles.label}>
          {label}
        </Text>
      )}

      <TextInput {...rest} style={styles.input} placeholderTextColor={Colors.white} />

      {hasError && (
        <Text style={styles.errorMessage}>
          {error}
        </Text>
      )}
    </View>
  )
}