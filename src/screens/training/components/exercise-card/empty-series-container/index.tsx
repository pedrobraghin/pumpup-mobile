import { Text, View } from 'react-native';
import { styles } from './styles';

export function EmptySeriesContainer() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Adicione um série
      </Text>
    </View>
  )
}