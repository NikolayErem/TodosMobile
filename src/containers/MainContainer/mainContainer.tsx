import { observer } from 'mobx-react';
import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { AxiosRequest } from '../../../axios/axiosRequest';
import appState, { TaskType } from '../../../store/store';
import MainComponent from './componets/mainComponent/mainComponent';

const MainContainer = observer((): JSX.Element => {
  async function loadTasksFromServer(): Promise<void> {
    const responseArrTasks: TaskType[] = await AxiosRequest.GetTodos();
    appState.loadTasks(responseArrTasks);
  }

  useEffect(() => {
    loadTasksFromServer();
  }, []);

  return <MainComponent styles={styles} />;
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E9E9EF',
    flexDirection: 'column',
    flex: 1,
  },
  headerBlock: {
    backgroundColor: '#68A9D8',
    paddingTop: 30,
    flex: 1,
  },
  textTitle: {
    color: 'white',
    fontWeight: '900',
    fontSize: 24,
    paddingLeft: 30,
  },
  todolist_block: {
    flex: 7,
  },
});

export default MainContainer;
