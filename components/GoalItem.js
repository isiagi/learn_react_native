import { StyleSheet, Text, View, Pressable } from 'react-native';

const GoalItem = ({ itemData, onDeleteItem }) => {
  return (
    <View style={styles.goalText}>
      <Pressable
        android_ripple={{ color: '#210644' }}
        onPress={onDeleteItem.bind(this, itemData.item.id)}
      >
        <Text style={styles.goalY}>{itemData.item.text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalText: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e08cc',
  },
  goalY: {
    color: '#fff',
    padding: 8,
  },
});
