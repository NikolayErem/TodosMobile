import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TodolistRender } from '../../containers/MainContainer/componets/todoListContainer/todolistRender/todolistRender';
import { Main_ScreenNames } from '../ScreenNames';

type TodoListTabParamList = {
  Tasks: { name: string; component: JSX.Element };
  Done: { name: string; component: JSX.Element };
};

const TodoListTab = createMaterialTopTabNavigator<TodoListTabParamList>();

function TodoListNavigator(): JSX.Element {
  return (
    <TodoListTab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: '#68A9D8' },
        tabBarActiveTintColor: '#FFF',
      }}>
      <TodoListTab.Screen name={Main_ScreenNames.Tasks} component={TodolistRender} />
      <TodoListTab.Screen name={Main_ScreenNames.Done} component={TodolistRender} />
    </TodoListTab.Navigator>
  );
}

export default TodoListNavigator;
