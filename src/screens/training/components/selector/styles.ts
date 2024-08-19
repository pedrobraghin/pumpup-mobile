import Colors from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    padding: 10,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  result: {
    fontSize: 18,
    marginTop: 20,
  },
  label: {
    color: Colors.white,
    fontSize: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(25, 25, 25, 0.5)",
  },
  modalContent: {
    backgroundColor: Colors.black,
    borderRadius: 10,
    width: "80%",
    maxHeight: "60%",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 24,
    gap: 10,
  },
  icon: {
    marginRight: 10,
  },
  itemText: {
    fontSize: 16,
    color: Colors.white,
  },
  separator: {
    height: 1,
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
});
