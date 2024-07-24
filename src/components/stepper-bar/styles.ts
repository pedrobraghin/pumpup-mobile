import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  leftbutton: {
    backgroundColor: "#252525",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    maxWidth: "50%",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "medium",
    letterSpacing: 2,
    fontSize: 16,
  },
  rightButton: {
    backgroundColor: "#252525",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    maxWidth: "50%",
    marginLeft: "auto",
  },
  buttonsContainer: {
    justifyContent: "space-between",
    gap: 4,
    flexDirection: "row",
    width: "100%",
  },
  container: {
    flex: 1,
    flexDirection: "column",
  },
  screenContainer: {
    flex: 1,
  },
});
