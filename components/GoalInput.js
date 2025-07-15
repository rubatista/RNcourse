import {
  StyleSheet,
  View,
  TextInput,
  Text,
  Pressable,
  Modal,
  Image
} from 'react-native';
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
    <>
      <Modal visible={props.visible} animationType='slide'>
        <View style={styles.inputContainerModal}>
          <Image
            source={require('../assets/favicon.png')}
            style={{ width: 50, height: 50, marginBottom: 20 }}
          />
          <TextInput
            style={styles.textInput}
            placeholder='Your course goal'
            placeholderTextColor='#410f70ff'
            onChangeText={goalInputHandler}
            value={enteredGoal}
          />
          <View style={styles.inputContainerModalButton}>
            <Pressable style={styles.buttonModal} onPress={addGoalHandler}>
              <Text style={styles.buttonText}>Add Goal</Text>
            </Pressable>

            <Pressable style={styles.buttonModalClose} onPress={props.onCancel}>
              <Text style={styles.buttonText}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
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
    </>
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
  inputContainerModal: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16
  },
  inputContainerModalButton: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    gap: 5
  },
  buttonModal: {
    width: '75%',
    backgroundColor: '#410f70ff',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 5,
    alignItems: 'center'
  },
  buttonModalClose: {
    width: '75%',
    backgroundColor: '#63249eff',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 5,
    alignItems: 'center'
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
