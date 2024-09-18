import { useState } from "react";
import { View, StyleSheet } from "react-native";
import GoalList from "./components/GoalList";
import GoalForm from "./components/GoalForm";

export default function App() {
  const [goalList, setGoalList] = useState([]);

  return (
    <View style={style.container}>
      {/* Goal Form */}
      <GoalForm setGoalList={setGoalList} />

      {/* Goal List */}
      <GoalList goalList={goalList} setGoalList={setGoalList} />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    marginTop: 50,
    padding: 10,
  },
});
