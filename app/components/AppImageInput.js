import { useEffect } from "react";
import {
  View,
  TouchableWithoutFeedback,
  StyleSheet,
  Alert,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

import { AppImage } from "./AppImage";
import colors from "../config/colors";

const AppImageInput = ({ uriImage, onChangeImage }) => {
  useEffect(() => {
    requestPermissons();
  }, []);

  const requestPermissons = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) {
      alert("you need to enable premission to access the libarary");
    }
  };

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!result.cancelled) {
        onChangeImage(result.uri);
      }
    } catch (error) {
      Alert.alert(error);
    }
  };

  const handlePress = () => {
    if (!uriImage) {
      selectImage();
    } else {
      Alert.alert("Delete", "Are you sure you want to delete this image?", [
        { text: "Yes", onPress: () => onChangeImage(null) },
        { text: "No" },
      ]);
    }
  };
  return (
    <TouchableWithoutFeedback onPress={() => handlePress()}>
      <View style={styles.container}>
        {uriImage ? (
          <AppImage imagePath={{ uri: uriImage }} imageStyle={styles.image} />
        ) : (
          <MaterialCommunityIcons
            size={50}
            name="camera"
            color={colors.medium}
          />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    backgroundColor: colors.grey,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default AppImageInput;
