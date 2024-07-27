import { TextInputProps } from "react-native";

export type InputProps = TextInputProps & {
  label?: string;
  hasError?: boolean;
  error?: string;
};
