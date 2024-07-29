import { Text, TouchableOpacity } from 'react-native'
import { PrimaryButtonProps } from './types'
import { styles } from './styles'

export function PrimaryButton({
  medium,
  small,
  ...props
}: Readonly<PrimaryButtonProps>) {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        medium && styles.mediumContainer,
        props.disabled && styles.disabledContainer
      ]}
      {...props}
      activeOpacity={0.8}
    >
      <Text
        style={[
          styles.buttonText,
          medium && styles.mediumText
        ]}
      >
        {props.title}
      </Text>
    </TouchableOpacity>
  )
}