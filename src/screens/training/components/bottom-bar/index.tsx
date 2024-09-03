import { Text, View } from "react-native";
import { styles } from './styles';
import { SquareButton } from '@/components/square-button';
import { BottomBarProps } from './types';
import Fontisto from '@expo/vector-icons/Fontisto';
import Colors from '@/constants/Colors';

export function BottomBar({ time }: Readonly<BottomBarProps>) {
  return (
    <View style={styles.container}>
      <View style={styles.timeContainer}>
        <Fontisto name="stopwatch" size={24} color={Colors.white} />
        <Text style={styles.title}>{time}</Text>
      </View>
      <SquareButton title='Finalizar' />
    </View>
  );
}
