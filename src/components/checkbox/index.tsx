import { TouchableOpacity } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { ChceckboxProps } from './types';
import { useCallback, useEffect, useState } from 'react';
import { styles } from './styles';
import Colors from '@/constants/Colors';

export function Checkbox({ value, onChangeValue }: Readonly<ChceckboxProps>) {
  const [checked, setChecked] = useState(value ?? false);

  useEffect(() => {
    setChecked(value ?? false);
  }, [value]);

  const handleChangeValue = useCallback(() => {
    setChecked(prev => {
      const newValue = !prev;
      onChangeValue(newValue);
      return newValue;
    });
  }, [onChangeValue]);

  return (
    <TouchableOpacity
      onPress={handleChangeValue}
      style={[styles.container, checked && styles.containerChecked]}
      accessibilityRole="button"
      accessibilityState={{ checked }}
      accessibilityLabel={checked ? "Checked" : "Unchecked"}
    >
      <Feather name="check" size={20} color={checked ? Colors.mainColor : Colors.white} />
    </TouchableOpacity>
  );
}
