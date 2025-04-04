import Colors from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.mainColor,
    justifyContent: "center",
    alignItems: "center",
    height: 52,
    borderRadius: 10,
  },
  buttonText: {
    color: Colors.black,
    fontWeight: "900",
    fontSize: 18,
  },
  mediumText: {
    fontSize: 16,
  },
  mediumContainer: {
    height: 38,
    borderRadius: 6,
  },
  disabledContainer: {
    opacity: 0.6,
  },
});
