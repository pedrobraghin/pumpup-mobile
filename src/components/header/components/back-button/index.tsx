import { TouchableOpacity } from 'react-native'
import { BackButtonProps } from './types'
import { AntDesign } from '@expo/vector-icons'
import Colors from '@/constants/Colors'
import { styles } from './styles'

export function BackButton({ onPress }: Readonly<BackButtonProps>) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <AntDesign name="arrowleft" size={24} color={Colors.white} />
    </TouchableOpacity>
  )
}