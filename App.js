import { useState } from "react";
import { Button, View, StyleSheet } from "react-native";
import GoalList from "./components/GoalList";
import GoalForm from "./components/GoalForm";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [goalList, setGoalList] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <>
      <StatusBar style="light" />
      <View style={style.container}>
        {/* Add Modal Button */}
        <Button title="Add Goal" onPress={() => setIsModalVisible(true)} />

        {/* Goal Form */}
        <GoalForm
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
          setGoalList={setGoalList}
        />

        {/* Goal List */}
        <GoalList goalList={goalList} setGoalList={setGoalList} />
      </View>
    </>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
});
