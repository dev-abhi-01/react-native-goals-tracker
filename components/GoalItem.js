import { Text, StyleSheet, Pressable } from "react-native";

export default function GoalItem({ id, text, deleteGoalItem }) {
  return (
    <Pressable
      android_ripple={{ color: "#9c9898" }}
      style={styles.goalItem}
      onPress={() => deleteGoalItem(id)}
    >
      <Text>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    padding: 10,
    backgroundColor: "#cccccc",
    borderRadius: 5,
    marginBottom: 10,
  },
});
