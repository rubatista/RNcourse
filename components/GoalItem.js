import { StyleSheet, View, Text, Button } from 'react-native';

function GoalItem(props) {
  function deleteGoalHandler(goalIndex) {
    setGoals((currentGoals) =>
      currentGoals.filter((_, index) => index !== goalIndex)
    );
  }

  return (
    <View style={styles.goalItem}>
      <Text>{props.text}</Text>
      {/* <Button title='X' onPress={() => deleteGoalHandler(props.index)} color='red'/> */}
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    padding: 5,
    backgroundColor: '#f0f0f0',
    marginVertical: 5,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#cccccc',
    borderWidth: 1
  }
});
