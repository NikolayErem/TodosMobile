import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import TodoListContainer from '../todoListContainer/todoListContainer';

type MainComponentType = {
  styles: { [key: string]: {} };
};

export default function MainComponent({ styles }: MainComponentType): JSX.Element {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.headerBlock}>
          <Text style={styles.textTitle}>Todo App</Text>
        </View>
        <View style={styles.todolist_block}>
          <TodoListContainer />
        </View>
      </View>
    </SafeAreaView>
  );
}
