import { StyleSheet, View, TextInput, Text, Pressable } from 'react-native';
import { useState } from 'react';

function GoalInput(props) {
  const [enteredGoal, setEnteredGoal] = useState('');

  function goalInputHandler(enteredText) {
    setEnteredGoal(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoal);
    setEnteredGoal('');
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder='Your course goal'
        placeholderTextColor='#410f70ff'
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />
      <Pressable style={styles.button} onPress={addGoalHandler}>
        <Text style={styles.buttonText}>Add Goal</Text>
      </Pressable>
    </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#410f70ff'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#410f70ff',
    width: '75%',
    backgroundColor: '#f9f9f9',
    padding: 8,
    borderRadius: 5
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
