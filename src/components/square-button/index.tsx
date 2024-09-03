import Entypo from "@expo/vector-icons/Entypo";
import { Text, TouchableOpacity } from 'react-native';
import { SquareButtonProps } from './types';
import { styles } from './styles';

export function SquareButton({ iconName, style, title, ...props }: Readonly<SquareButtonProps>) {
  return (
    <TouchableOpacity
      {...props}
      activeOpacity={0.8}
      style={[styles.container, style]}
    >
      {title && (
        <Text style={styles.buttonText}>
          {title}
        </Text>
      )}
      {<Entypo name={iconName} size={20} />}
    </TouchableOpacity>
  )
}