import { Text, View } from 'react-native';
import { SectionHeaderProps } from './types';
import { styles } from './styles';

export function SectionHeader({ title }: Readonly<SectionHeaderProps>) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}
