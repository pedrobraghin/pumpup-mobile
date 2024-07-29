import { Entypo } from "@expo/vector-icons";
import { TouchableOpacityProps } from "react-native";

export type SquareButtonProps = TouchableOpacityProps & {
  title?: string;
  iconName?: keyof typeof Entypo.glyphMap;
};
