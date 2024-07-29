import { Text, TouchableOpacity } from 'react-native'
import { PrimaryButtonProps } from './types'
import { styles } from './styles'

export function PrimaryButton(props: Readonly<PrimaryButtonProps>) {
  return (
    <TouchableOpacity style={styles.container} {...props} activeOpacity={0.8}>
      <Text style={styles.buttonText}>
        {props.title}
      </Text>
    </TouchableOpacity>
  )
}