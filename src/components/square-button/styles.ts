import Colors from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.mainColor,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    flexDirection: "row",
    gap: 6,
    paddingHorizontal: 16,
    paddingVertical: 6,
    maxHeight: 30,
  },
  buttonText: {
    color: Colors.black,
    fontWeight: "bold",
    fontSize: 14,
    letterSpacing: 1,
  },
});
