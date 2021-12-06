import { observer } from 'mobx-react';
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import ModalWindowAddTask from '../modalWindowAddTask/modalWindowAddTask';
import TodoListBtn from '../todoListBtn/todoListBtn';
import TodoListNavigator from '../../../../navigation/todoListNavigator/todoListNavigator';

const TodoListContainer = observer((): JSX.Element => {
  let [modalIsVisible, setModalIsVisible] = useState<boolean>(false);
  console.log('ok');
  return (
    <View style={styles.container}>
      <ModalWindowAddTask modalIsVisible={modalIsVisible} setModalIsVisible={setModalIsVisible} />
      <TodoListNavigator />
      <TodoListBtn setModalIsVisible={setModalIsVisible} />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    zIndex: 1,
    height: '100%',
  },
});

export default TodoListContainer;
