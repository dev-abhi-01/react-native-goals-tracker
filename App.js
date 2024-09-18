import { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [goalList, setGoalList] = useState([]);

  function addGoal() {
    setGoalList((currentGoalList) => {
      return [...currentGoalList, enteredGoal];
    });
    setEnteredGoal("");
  }

  return (
    <View style={style.container}>
      <View style={style.inputContainer}>
        <TextInput
          style={style.textInput}
          value={enteredGoal}
          placeholder="Your course goal!"
          onChangeText={setEnteredGoal}
        />
        <Button title="Add Goal" onPress={addGoal} />
      </View>
      <View style={style.goalList}>
        <Text>Here are your goals:</Text>
        {goalList.map((goal, index) => (
          <Text key={index}>{goal}</Text>
        ))}
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    marginTop: 50,
    padding: 10,
  },
  inputContainer: {
    flexDirection: "row",
  },
  textInput: {
    borderWidth: 1,
    flex: 1,
    padding: 5,
  },
  goalList: {
    marginTop: 50,
  },
});
