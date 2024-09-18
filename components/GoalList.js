import { View, StyleSheet } from "react-native";
import GoalItem from "./GoalItem";

export default function ({ goalList, setGoalList }) {
  function deleteGoalItem(goalID) {
    const filteredGoalList = goalList.filter((goal) => goal.id !== goalID);
    setGoalList(filteredGoalList);
  }

  return (
    <View style={style.goalList}>
      {goalList.map((goal) => (
        <GoalItem
          key={goal.id}
          id={goal.id}
          text={goal.text}
          setGoalList={setGoalList}
          deleteGoalItem={deleteGoalItem}
        />
      ))}
    </View>
  );
}

const style = StyleSheet.create({
  goalList: {
    marginTop: 50,
  },
});
