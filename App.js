import { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [goals, setGoals] = useState([]);

  function startAddGoalModalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalModalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoal) {
    if (enteredGoal.trim().length === 0) {
      return;
    }
    setGoals((currentGoals) => [
      ...currentGoals,
      { text: enteredGoal, id: Math.random().toString() }
    ]);

    endAddGoalModalHandler();
  }

  function deleteGoalHandler(id) {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <View style={styles.appContainer}>
      <Pressable style={styles.button} onPress={startAddGoalModalHandler}>
        <Text style={styles.buttonText}>Modal</Text>
      </Pressable>
      <GoalInput
        onAddGoal={addGoalHandler}
        visible={modalIsVisible}
        onCancel={endAddGoalModalHandler}
      />
      <View style={styles.goalsContainer}>
        <Text style={styles.title}>
          {goals.length === 0 ? 'No goals added yet!' : 'GOALS'}
        </Text>
        <FlatList
          data={goals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={deleteGoalHandler}
              />
            );
          }}
          idExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingVertical: 50,
    backgroundColor: '#fff',
    flex: 1,
    paddingHorizontal: 15
  },
  goalsContainer: {
    flex: 6
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#410f70ff',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 5,
    alignItems: 'center'
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  }
});
