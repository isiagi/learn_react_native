import { useState } from 'react';
import { StyleSheet, View, TextInput, Button, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import InputContainer from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((preState) => [
      ...preState,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  }

  function deleteGoalHander(id) {
    setCourseGoals(currentCourseState => {
      return currentCourseState.filter((goal) => goal.id !== id)
    })
  }
  return (
    <View style={styles.Appcontainer}>
       <InputContainer
        addGoalHandler={addGoalHandler}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return <GoalItem itemData={itemData} onDeleteItem={deleteGoalHander}/>;
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Appcontainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});
