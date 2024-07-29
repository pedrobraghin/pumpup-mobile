import Colors from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  contentContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    flex: 1,
  },
  title: {
    fontSize: 20,
    color: Colors.white,
    paddingBottom: 20,
    fontWeight: "bold",
  },
});
