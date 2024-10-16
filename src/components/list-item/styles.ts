import Colors from '@/constants/Colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    color: Colors.black,
    fontSize: 18,
    fontWeight: 'semibold',
  },
  leftContainer: {
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
    flexGrow: 1,
  },
});
