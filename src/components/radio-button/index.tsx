import { Pressable, Text } from 'react-native';
import { RadioButtonProps } from './types';
import { styles } from './styles';

export function RadioButton({ checked, onPress, value, label }: Readonly<RadioButtonProps>) {
  function handleOnPress() {
    onPress(value);
  }

  return (
    <Pressable
      onPress={handleOnPress}
      style={[
        styles.container,
        checked && styles.activeContainer
      ]}
    >
      <Text
        style={[styles.title, checked && styles.activeTitle]}
      >
        {label}
      </Text>
    </Pressable>
  );
}