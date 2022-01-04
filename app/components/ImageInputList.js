import { useRef } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import AppImageInput from "./AppImageInput";

const ImageInputList = ({ urisImage, handleAdd, handleRemove }) => {
  const scrollView = useRef();
  return (
    <View>
      <ScrollView
        ref={scrollView}
        horizontal
        onContentSizeChange={() => scrollView.current.scrollToEnd()}
      >
        <View style={styles.container}>
          {urisImage.map((uri) => (
            <View style={styles.image} key={uri}>
              <AppImageInput
                uriImage={uri}
                onChangeImage={() => handleRemove(uri)}
              />
            </View>
          ))}
          <AppImageInput onChangeImage={(uri) => handleAdd(uri)} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    marginRight: 10,
  },
});

export default ImageInputList;
