import { StyleProp, ViewStyle } from 'react-native';
import { HeaderProps } from '../header/types';

export type SafeScrollViewProps = {
  children: React.ReactNode;
  showHeader?: boolean;
  headerProps?: HeaderProps;
  contentContainerStyle?: StyleProp<ViewStyle>;
  scrollContainerStyle?: StyleProp<ViewStyle>;
};
