import Colors from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginTop: 32,
  },
  label: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: "bold",
  },
  firstContainer: {
    flexDirection: "column",
    gap: 16,
  },
  secondContainer: {
    marginTop: 24,
    flexDirection: "column",
    gap: 16,
  },
  secondContainerContent: {
    flexDirection: "column",
    gap: 18,
  },
});
