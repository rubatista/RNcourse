import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [goals, setGoals] = useState([]);

  function goalInputHandler(enteredText) {
    console.log(enteredText);
    setEnteredGoal(enteredText);
  }

  function addGoalHandler() {
    if (enteredGoal.trim().length === 0) {
      return;
    }
    setGoals(currentGoals => [
      ...currentGoals,
      {text: enteredGoal, key: Math.random().toString()}
    ]);
    setEnteredGoal('');
  }

  function deleteGoalHandler(goalIndex) {
    setGoals(currentGoals => currentGoals.filter((_, index) => index !== goalIndex));
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Your course goal' onChangeText={goalInputHandler} />
        <Button title='Add Goal' onPress={addGoalHandler}/>
      </View>
      <View style={styles.goalsContainer}>
        <Text>List of Goals</Text>
        <FlatList data={goals} renderItem={itemData => {
          return (
            <View style={styles.goalItem}>
              <Text>{itemData.item.text}</Text>
              <Button title='X' onPress={() => deleteGoalHandler(itemData.index)} color='red'/>
            </View>
          );
        }}
        keyExtractor={(item, index) => {return item.key}}
        alwaysBounceVertical={false} />

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
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '80%',
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 5,
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 6,
  },
  goalItem: {
    padding: 5,
    backgroundColor: '#f0f0f0',
    marginVertical: 5,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#cccccc',
    borderWidth: 1,
  },
});
