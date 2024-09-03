import Colors from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const exerciseSeriesContainerStyles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 6,
  },
  seriesContainer: {
    gap: 8,
  },
});

export const exerciseSeriesHeaderStyles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 4,
  },
  colLabel: {
    fontSize: 12,
    color: Colors.mainColor,
    textAlign: "center",
    flexBasis: "14.6%",
    opacity: 0.8,
    flexGrow: 1,
  },
});
