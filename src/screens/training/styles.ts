import Colors from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 72,
    paddingTop: 38,
  },
  title: {
    fontSize: 20,
    color: Colors.mainColor,
    fontWeight: "bold",
  },
  titleContainer: {
    marginBottom: 38,
  },
  contentContainer: {
    flexDirection: "column",
    gap: 22,
  },
});
