import Colors from '@/constants/Colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    backgroundColor: Colors.white,
    minWidth: '100%',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 32,
    height: 56,
    borderRadius: 10,
    gap: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: -0.2,
  },
  helperText: {
    color: Colors.white,
    opacity: 0.8,
  },
  languageText: {
    color: Colors.white,
    opacity: 0.8,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 28,
    paddingVertical: 28,
  },
  helpContainer: {
    flexDirection: 'row',
    gap: 6,
    alignItems: 'center',
  },
  termsTextOne: {
    color: Colors.white,
    fontSize: 12,
  },
  termsTextTwo: {
    color: Colors.mainColor,
    fontSize: 12,
  },
  termsTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 16,
  },
});
