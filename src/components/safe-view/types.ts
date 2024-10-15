import { StyleProp, ViewStyle } from 'react-native';
import { HeaderProps } from '../header/types';

export type SafeViewProps = {
  children: React.ReactNode;
  showHeader?: boolean;
  headerProps?: HeaderProps;
  contentContainerStyle?: StyleProp<ViewStyle>;
  safeContainerStyle?: StyleProp<ViewStyle>;
};
