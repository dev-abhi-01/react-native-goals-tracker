import { StyleSheet, View, FlatList } from "react-native";
import GoalItem from "./GoalItem";

export default function ({ goalList, setGoalList }) {
  function deleteGoalItem(goalID) {
    const filteredGoalList = goalList.filter((goal) => goal.id !== goalID);
    setGoalList(filteredGoalList);
  }

  return (
    <View style={style.goalList}>
      <FlatList
        data={goalList}
        renderItem={(itemData) => (
          <GoalItem
            key={itemData.item.id}
            id={itemData.item.id}
            text={itemData.item.text}
            setGoalList={setGoalList}
            deleteGoalItem={deleteGoalItem}
          />
        )}
        keyExtractor={(goal) => goal.id}
      />
    </View>
  );
}

const style = StyleSheet.create({
  goalList: {
    marginTop: 50,
  },
});
