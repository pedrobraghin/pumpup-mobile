import Colors from "@/constants/Colors";
import { Dimensions, StyleSheet } from "react-native";
const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 80,
    position: "absolute",
    left: 0,
    bottom: 0,
    zIndex: 10,
    minWidth: width,
    backgroundColor: Colors.black,
    borderTopWidth: 0.2,
    borderTopColor: Colors.white,
    paddingHorizontal: 28,
    paddingVertical: 18,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  title: {
    color: Colors.white,
    fontSize: 22,
    fontWeight: "medium",
  },
  timeContainer: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    gap: 16,
  },
  buttonStyle: {
    fontWeight: "bold",
  },
});
