import Colors from "@/constants/Colors";

export function getColorBasedOnWidth(widthPercentage: number) {
  if (widthPercentage <= 40) return Colors.mainColor;

  return Colors.black;
}
