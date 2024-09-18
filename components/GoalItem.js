import { Text, StyleSheet, Pressable } from "react-native";

export default function GoalItem({ id, text, deleteGoalItem }) {
  return (
    <Pressable style={styles.goalItem} onPress={() => deleteGoalItem(id)}>
      <Text>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    padding: 10,
    backgroundColor: "lightpink",
    borderRadius: 5,
    marginBottom: 10,
  },
});
