import { Text, View } from 'react-native';
import { ListItemProps } from './types';
import { styles } from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

export function ListItem({
  title,
  onPress,
  leftIcon,
  rightIcon,
}: Readonly<ListItemProps>) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.leftContainer}>
        {leftIcon}
        <Text style={styles.text}>{title}</Text>
      </View>
      {rightIcon}
    </TouchableOpacity>
  );
}
