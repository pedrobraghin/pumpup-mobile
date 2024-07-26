import Colors from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  input: {
    borderColor: Colors.mainColor,
    borderWidth: 1,
    borderRadius: 4,
    height: 48,
    color: Colors.white,
    fontWeight: "300",
    padding: 16,
    fontSize: 12,
  },
  searchButtonStyle: {
    position: "absolute",
    right: 0,
    width: 58,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
