import { View } from 'react-native';
import { styles } from './styles';

export function ListItemSeparator() {
  return (
    <View style={styles.container}>
      <View style={styles.line}></View>
    </View>
  );
}
