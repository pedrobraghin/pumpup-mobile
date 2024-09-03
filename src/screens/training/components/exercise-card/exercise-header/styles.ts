import Colors from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const exerciseHeaderStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  },
  imageContainer: {
    flexGrow: 1,
  },
  image: {
    borderRadius: 50,
    width: 40,
    height: 40,
  },
  contentContainer: {
    flexGrow: 8,
    justifyContent: "space-between",
  },
  exerciseName: {
    color: Colors.mainColor,
    fontSize: 18,
  },
  exerciseDescription: {
    color: Colors.white,
    fontSize: 14,
    opacity: 0.84,
  },
  buttonContainer: {},
});
