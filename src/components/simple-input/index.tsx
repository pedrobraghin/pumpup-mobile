import { TextInput } from 'react-native';
import { SimpleInputProps } from './types';
import { styles } from './styles';
import Colors from '@/constants/Colors';

export function SimpleInput(props: Readonly<SimpleInputProps>) {
  return (
    <TextInput
      placeholderTextColor={Colors.white}
      {...props}
      style={[props.style, styles.container]}
    />
  )
}