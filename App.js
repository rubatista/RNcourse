import { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [goals, setGoals] = useState([]);

  function addGoalHandler(enteredGoal) {
    if (enteredGoal.trim().length === 0) {
      return;
    }
    setGoals((currentGoals) => [
      ...currentGoals,
      { text: enteredGoal, key: Math.random().toString() }
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <Text>List of Goals</Text>
        <FlatList
          data={goals}
          renderItem={(itemData) => {
            return (
              <GoalItem text={itemData.item.text} index={itemData.index} />
            );
          }}
          keyExtractor={(item, index) => {
            return item.key;
          }}
          alwaysBounceVertical={false}
        />

        {goals.length === 0 && <Text>No goals added yet!</Text>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    backgroundColor: '#fff',
    flex: 1,
    paddingHorizontal: 16
  },
  goalsContainer: {
    flex: 6
  }
});
