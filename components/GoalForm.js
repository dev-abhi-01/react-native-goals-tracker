import { useState } from "react";
import { View, StyleSheet, Button, TextInput } from "react-native";

export default function ({ setGoalList }) {
  const [enteredGoal, setEnteredGoal] = useState("");

  function addGoal() {
    setGoalList((currentGoalList) => {
      return [
        ...currentGoalList,
        { text: enteredGoal, id: Math.random().toString() },
      ];
    });
    setEnteredGoal("");
  }
  return (
    <View style={style.inputContainer}>
      <TextInput
        style={style.textInput}
        value={enteredGoal}
        placeholder="Your course goal!"
        onChangeText={setEnteredGoal}
      />
      <Button title="Add Goal" onPress={addGoal} />
    </View>
  );
}

const style = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
  },
  textInput: {
    borderWidth: 1,
    flex: 1,
    padding: 5,
  },
});
