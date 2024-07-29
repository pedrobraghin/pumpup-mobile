import Colors from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
  },
  contentContainer: {
    flexGrow: 1,
    paddingBottom: 32,
  },
  scrollContainer: {
    paddingBottom: 32,
    paddingHorizontal: 26,
    paddingTop: 28,
    flexGrow: 1,
    backgroundColor: Colors.black,
  },
});
