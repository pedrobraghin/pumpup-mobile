import Colors from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  tip: {
    fontSize: 18,
    fontStyle: "italic",
    color: Colors.white,
    textAlign: "center",
    fontWeight: "300",
  },
  tipsContainer: {
    flexDirection: "column",
    gap: 16,
    justifyContent: "center",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 32,
  },
});
