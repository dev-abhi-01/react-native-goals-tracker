import { useState } from "react";
import {
  View,
  StyleSheet,
  Button,
  TextInput,
  Modal,
  Image,
} from "react-native";

export default function ({ setGoalList, isModalVisible, setIsModalVisible }) {
  const [enteredGoal, setEnteredGoal] = useState("");

  function addGoal() {
    if (enteredGoal.trim()) {
      setGoalList((currentGoalList) => {
        return [
          ...currentGoalList,
          { text: enteredGoal, id: Math.random().toString() },
        ];
      });
      setEnteredGoal("");
      setIsModalVisible(false);
    }
  }

  function cancelAddGoal() {
    setEnteredGoal("");
    setIsModalVisible(false);
  }

  return (
    <Modal visible={isModalVisible} animationType="slide">
      <View style={style.formContainer}>
        <Image
          style={style.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          style={style.textInput}
          value={enteredGoal}
          placeholder="Your course goal!"
          onChangeText={setEnteredGoal}
        />
        <View style={style.buttonContainer}>
          <View style={style.button}>
            <Button title="Add Goal" onPress={addGoal} color="#c7b4e0" />
          </View>
          <View style={style.button}>
            <Button title="Cancel" onPress={cancelAddGoal} color="#f31282" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const style = StyleSheet.create({
  formContainer: {
    flex: 1,
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#313b6b",
  },
  textInput: {
    width: "100%",
    padding: 12,
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    marginBottom: 16,
    color: "#120438",
    borderRadius: 6,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    width: "30%",
    marginHorizontal: 20,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
