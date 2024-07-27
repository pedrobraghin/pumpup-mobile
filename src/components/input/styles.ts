import Colors from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 8,
  },
  label: {
    fontWeight: "medium",
    fontSize: 16,
    color: Colors.white,
  },
  input: {
    borderColor: Colors.mainColor,
    borderWidth: 1,
    borderRadius: 6,
    height: 48,
    color: Colors.white,
    fontWeight: "300",
    padding: 16,
    fontSize: 12,
  },
});
