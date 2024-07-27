import { StyleProp, ViewStyle } from "react-native";

export type HeaderProps = {
  title?: string;
  showBackButton?: boolean;
  right?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  showBorder?: boolean;
};
