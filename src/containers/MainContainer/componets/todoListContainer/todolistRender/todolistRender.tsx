import { observer } from 'mobx-react';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import appState from '../../../../../../store/store';
import TodoItemContainer from '../../todoItemContainer/todoItemContainer';

type TodolistRenderPropsType = {
  navigation: { [key: string]: any };
};

export const TodolistRender = observer(({ navigation }: TodolistRenderPropsType): JSX.Element => {
  const [tabName, setTabName] = useState<string>('Tasks');

  console.log(navigation);

  useEffect(() => {
    navigation.addListener('focus', event => {
      let focusName;
      focusName = event.target.split('-')[0];
      setTabName(focusName);
      tabName === 'Done' ? appState.changeTasksIsSelect(false) : appState.changeTasksIsSelect(true);
      console.log('not ok');
    });
  }, [navigation]);

  return (
    <FlatList
      data={
        tabName === 'Done'
          ? appState.tasks.filter(task => task.isCheck === true)
          : appState.tasks.filter(task => task.isCheck === false)
      }
      renderItem={task => <TodoItemContainer taskParams={task.item} index={task.index} />}
      keyExtractor={task => task.id}
      style={styles.container}
    />
  );
});

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
