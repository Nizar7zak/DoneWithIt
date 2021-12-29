import { Text as RNText } from "react-native";
import colors from "../config/colors";

const typographies = {
  h1: {
    fontSize: 24,
    fontWeight: "bold",
    lineHeight: 32,
  },
  h2: {
    fontSize: 16,
    fontWeight: "bold",
    lineHeight: 28,
  },
  p1: {
    fontSize: 18,
    lineHeight: 24,
  },
  p2: {
    fontSize: 16,
    lineHeight: 22,
  },
};

export const Text = ({
  color = colors.black,
  onPress = () => {},
  style = {},
  typography = "p1",
  value = "ERROR",
}) => {
  const defaultStyles = {
    ...typographies[typography],
    color: colors[color],
  };
  return (
    <RNText onPress={onPress} style={[defaultStyles, style]}>
      {value}
    </RNText>
  );
};
