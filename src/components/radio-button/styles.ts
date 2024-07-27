import Colors from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingVertical: 13,
    borderWidth: 1,
    borderColor: Colors.white,
    borderRadius: 4,
    flexGrow: 1,
    flexBasis: 40,
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.6,
  },
  activeContainer: {
    borderColor: Colors.mainColor,
    opacity: 1,
  },
  title: {
    color: Colors.white,
    fontWeight: "medium",
    fontSize: 11,
  },
  activeTitle: {
    color: Colors.mainColor,
  },
});
