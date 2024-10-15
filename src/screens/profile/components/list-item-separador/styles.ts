import Colors from '@/constants/Colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    minWidth: '100%',
    flexDirection: 'row',
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: Colors.lightGray,
    borderRadius: 50,
    opacity: 0.4,
  },
});
