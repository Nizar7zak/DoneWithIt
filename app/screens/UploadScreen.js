import { View, StyleSheet, Modal } from "react-native";
import { AppText } from "../components/AppText";
import * as Progress from 'react-native-progress';
import colors from "../config/colors";

const UploadScreen = ({ visible = false, progress = 0 }) => {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        <Progress.Bar color={colors.primary} progress={progress} width={200} />
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
