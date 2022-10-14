import { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import InputContainer from './components/GoalInput';

import {StatusBar} from "expo-status-bar"

export default function App() {
  const [modalIsVisiable, setModalIsVisible] = useState(false)
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(true)
  }

  function endAddGoalHandler() {
    setModalIsVisible(false)
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((preState) => [
      ...preState,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    endAddGoalHandler() 
  }

  function deleteGoalHander(id) {
    setCourseGoals(currentCourseState => {
      return currentCourseState.filter((goal) => goal.id !== id)
    })
  }
  return (
    <>
    <StatusBar style="light"/>
    <View style={styles.Appcontainer}>
    <Button title="Add New Goal" color="#5e0acc" onPress={startAddGoalHandler}/>
       <InputContainer
        addGoalHandler={addGoalHandler}
        isVisible={modalIsVisiable}
        onCancel={endAddGoalHandler}
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
    </>
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
