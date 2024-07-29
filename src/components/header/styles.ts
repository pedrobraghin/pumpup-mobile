import Colors from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    gap: 8,
    height: 55,
    paddingHorizontal: 26,
  },
  title: {
    color: Colors.white,
    fontSize: 20,
  },
  centerContainer: {
    flex: 1,
  },
  withBorder: {
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.white,
  },
});
