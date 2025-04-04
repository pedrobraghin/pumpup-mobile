import Colors from '@/constants/Colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: Colors.darkWhite,
    paddingTop: 16,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  image: {
    borderRadius: 50,
    width: 38,
    height: 38,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
