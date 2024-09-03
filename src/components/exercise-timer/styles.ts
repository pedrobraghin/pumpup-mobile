import Colors from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: 30,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 4,
    borderWidth: 1,
    borderColor: Colors.mainColor,
    overflow: "hidden",
  },
  containerBackground: {
    backgroundColor: Colors.mainColor,
    height: 30,
    width: "0%",
  },
  time: {
    color: "red",
    fontSize: 14,
    fontWeight: "bold",
    position: "absolute",
    zIndex: 1,
    textAlign: "center",
    width: "100%",
  },
});
