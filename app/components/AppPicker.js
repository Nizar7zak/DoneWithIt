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
  PickerItemComponent = PickerItem,
  numberOfColumns=1,
  selectedItem,
  onSelectItem,
  width = "100%",
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, { width }]}>
          {iconName && (
            <MaterialCommunityIcons
              name={iconName}
              size={20}
              color={defaultStyles.colors.medium}
              style={styles.icon}
            />
          )}

          {selectedItem ? (
            <AppText style={styles.text}>{selectedItem.label}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}

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
            keyExtractor={(item) => item.id.toString()}
            numColumns={numberOfColumns}
            renderItem={({ item }) => (
              <PickerItemComponent
                label={item.label}
                color={defaultStyles.colors.medium}
                item={item}
                onPress={() => {
                  onSelectItem(item);
                  setModalVisible(false);
                }}
              />
            )}
          />
        </SafeScreen>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
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
  placeholder: {
    flex: 1,
    color: defaultStyles.colors.medium,
  },
  closeIcon: {
    alignSelf: "center",
  },
});
