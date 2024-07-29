import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

import Colors from '@/constants/Colors';

import { styles } from './styles';
import { CircleButtonProps } from './types';

export function CircleButton({ onPress }: Readonly<CircleButtonProps>) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <FontAwesome name="plus" size={22} color={Colors.black} />
    </TouchableOpacity>
  )
}