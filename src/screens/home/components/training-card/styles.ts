import Colors from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 8,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: Colors.mainColor,
    flex: 1,
    overflow: "hidden",
  },
  leftContainer: {
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  label: {
    color: Colors.white,
    fontWeight: "900",
    fontSize: 16,
    position: "absolute",
  },
  rightContainer: {
    flexDirection: "column",
    paddingHorizontal: 8,
    paddingTop: 6,
    paddingBottom: 18,
    gap: 12,
    flexGrow: 1,
    flexShrink: 1,
  },
  titleOne: {
    color: Colors.mainColor,
    fontWeight: "bold",
    fontSize: 16,
    flexGrow: 1,
  },
  titleTwo: {
    flexGrow: 10,
    flexShrink: 1,
    color: Colors.mainColor,
    fontWeight: "bold",
    fontSize: 16,
  },
  titleContainer: {
    flexDirection: "row",
  },
  description: {
    opacity: 0.8,
    color: Colors.white,
    fontSize: 12,
  },
  image: {
    flex: 1,
    width: 80,
    opacity: 0.2,
    height: "auto",
  },
});
