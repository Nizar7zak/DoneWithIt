import LottieView from "lottie-react-native";

export function LoadingScreen({ visible = false }) {
  if (!visible) return null;
  return (
    <LottieView
      source={require("../assets/animations/loader.json")}
      autoPlay
      loop
    />
  );
}
