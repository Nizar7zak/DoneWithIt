import { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/defaultStyles";
import { AppText } from "./AppText";
import { PickerItem } from "./PickerItem";
import { SafeScreen } from "./SafeScreen";

export const AppPicker = ({
  iconName,
  placeholder,
  categories,
  selectedItem,
  onSelectItem,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {iconName && (
            <MaterialCommunityIcons
              name={iconName}
              size={20}
              color={defaultStyles.colors.medium}
              style={styles.icon}
            />
          )}
          <AppText style={styles.text}>
            {selectedItem ? selectedItem.label : placeholder}
          </AppText>
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={defaultStyles.colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>

      <Modal visible={modalVisible} animationType="slide">
        <SafeScreen>
          <MaterialCommunityIcons
            name="close"
            size={25}
            style={styles.closeIcon}
            onPress={() => setModalVisible(false)}
          />
          <FlatList
            data={categories}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItem
                label={item.label}
                color={defaultStyles.colors.medium}
                onPress={() => {
                  onSelectItem(item);
                  setModalVisible(false);
                }}
              />
            )}
          />
        </SafeScreen>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
    backgroundColor: defaultStyles.colors.grey,
    borderRadius: 35,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1,
  },
  closeIcon: {
    alignSelf: "center",
  },
});
