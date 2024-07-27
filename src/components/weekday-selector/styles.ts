import Colors from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
  },
  weekdaysContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "stretch",
    gap: 8,
    paddingTop: 8,
  },
  label: {
    fontWeight: "medium",
    fontSize: 16,
    color: Colors.white,
  },
  errorMessage: {
    color: Colors.error,
    letterSpacing: 1,
    marginTop: 6,
  },
});
