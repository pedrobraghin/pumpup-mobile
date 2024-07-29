import Colors from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingTop: 26,
  },
  label: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonText: {
    color: Colors.white,
  },
  addTrainingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonContainer: {
    marginTop: 20,
  },
});
