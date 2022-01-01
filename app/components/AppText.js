import { Text as RNText } from "react-native";
import defaultStyles from "../config/defaultStyles";

export const AppText = ({ children, style }) => {
  return <RNText style={[defaultStyles.text, style]}>{children}</RNText>;
};
