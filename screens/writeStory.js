import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default class SearchScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.inputBox} placeholder="Story Title" />

        <TextInput style={styles.inputBox} placeholder="Author" />
        <TextInput style={styles.StoryWriting} placeholder="Write Your Story" />
        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputBox: {
    width: 200,
    height: 50,
    borderWidth: 1.5,
    borderRightWidth: 0,
    fontSize: 20,
  },
  StoryWriting: {
   
    width: 200,
    height: 50,
    borderWidth: 1.5,
    borderRightWidth: 0,
    fontSize: 20,
  },
  submitButton: {
    backgroundColor: "orange",
    width: 50,
    borderWidth: 1.5,
    borderLeftWidth: 0,
  },
  submitText: { fontSize: 30, textAlign: "center", fontWeight: "bold" },
});
