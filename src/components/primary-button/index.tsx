import { Pressable, Text } from 'react-native';
import { PrimaryButtonProps } from './types';
import { styles } from './styles';

export function PrimaryButton(props: Readonly<PrimaryButtonProps>) {
  return (
    <Pressable style={styles.container}>
      <Text style={styles.buttonText}>
        {props.title}
      </Text>
    </Pressable>
  )
}