import Colors from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
    paddingHorizontal: 26,
    flexDirection: "column",
    justifyContent: "space-between",
    paddingBottom: 32,
    paddingTop: 28,
  },
  title: {
    fontSize: 20,
    color: Colors.white,
    paddingBottom: 20,
  },
});
