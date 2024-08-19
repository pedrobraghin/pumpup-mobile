import Colors from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    borderWidth: 0.5,
    borderColor: Colors.white,
    borderRadius: 4,
    width: 25,
    height: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  containerChecked: {
    borderColor: Colors.mainColor,
  },
});
