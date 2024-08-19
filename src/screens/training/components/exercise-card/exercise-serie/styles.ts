import Colors from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const placeholderColor = "rgba(255, 255, 255, 0.8)";
export const borderBottomColor = "rgba(255, 255, 255, 0.6)";

export const exerciseSerieStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 4,
    paddingVertical: 4,
    position: "absolute",
    backgroundColor: Colors.black,
    height: 50,
    flex: 1,
    width: "100%",
  },
  text: {
    flexGrow: 1,
    color: Colors.white,
    flexBasis: "14.6%",
    textAlign: "center",
    fontSize: 16,
  },
  checkBoxContainer: {
    flexGrow: 1,
    flexBasis: "14.6%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export const inputStyles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: borderBottomColor,
  },
});

export const selectorContainerStyles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexBasis: "14.6%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export const rootContainer = StyleSheet.create({
  container: {
    position: "relative",
  },
});

export const deleteSerieContainer = StyleSheet.create({
  container: {
    backgroundColor: Colors.red,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingHorizontal: 8,
    width: 64,
    height: 50,
    alignSelf: "flex-end",
  },
  text: {
    color: Colors.white,
    fontWeight: "light",
  },
});
