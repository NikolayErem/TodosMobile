import React from 'react';
import { StyleSheet } from 'react-native';
import { AxiosRequest } from '../../../../../axios/axiosRequest';
import appState, { TaskType } from '../../../../../store/store';
import TodoListItemComponent from '../todoListItemComponent/todoListItemComponent';

type TodoListItemContainerPropsType = {
  taskParams: TaskType;
  index: number;
};

export default function TodoItemContainer({
  taskParams,
  index,
}: TodoListItemContainerPropsType): JSX.Element {
  function taskIsComplite(newValue: boolean, taskId: string) {
    appState.changeisCheck(newValue, taskId);
    AxiosRequest.CompliteTodo(taskParams);
  }

  function taskDelete() {
    AxiosRequest.DeleteTodo(taskParams.id);
    appState.deleteTask(taskParams.id);
  }

  function allTasksComplite() {
    AxiosRequest.CompliteAllTodos();
    appState.compliteAllTasks();
  }

  function allTasksDelete() {
    AxiosRequest.DeleteAllTodos();
    appState.deleteAllTasks();
  }

  return (
    <TodoListItemComponent
      styles={styles}
      taskIsComplite={taskIsComplite}
      taskDelete={taskDelete}
      allTasksComplite={allTasksComplite}
      allTasksDelete={allTasksDelete}
      taskParams={taskParams}
      index={index}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  text: {
    color: 'black',
  },
  blockBtn: {
    display: 'flex',
    flexDirection: 'row',
    width: 70,
    justifyContent: 'space-between',
  },
  deleteBtn: {
    opacity: 0.3,
    width: 30,
    height: 30,
  },
});
