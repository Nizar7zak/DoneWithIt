import { View, StyleSheet, Modal } from "react-native";
import { AppText } from "../components/AppText";

const UploadScreen = ({ visible = false, progress = 0 }) => {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        <AppText>{progress * 100}%</AppText>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});

export default UploadScreen;
