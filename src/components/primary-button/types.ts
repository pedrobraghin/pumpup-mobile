import { TouchableOpacityProps } from "react-native";

export type PrimaryButtonProps = TouchableOpacityProps & {
  title: string;
  medium?: boolean;
  small?: boolean;
};
