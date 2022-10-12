import { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

const GoalInput = ({ addGoalHandler }) => {
  const [enteredGoalState, setEnteredGoalState] = useState('');

  function goalInputHandler(enteredText) {
    setEnteredGoalState(enteredText);
  }

  function addGoalHandlerr() {
    addGoalHandler(enteredGoalState)
    setEnteredGoalState(" ")
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your course goal!"
        onChangeText={goalInputHandler}
        value={enteredGoalState}
      />
      <Button
        title="Add Goal"
        onPress={addGoalHandlerr}
      />
    </View>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderColor: '#cccccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
});
