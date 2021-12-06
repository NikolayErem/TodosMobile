import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Main_ScreenNames } from '../ScreenNames';
import MainContainer from '../../containers/MainContainer/mainContainer';

type MainStackParamList = {
  MainScreen: { name: string; component: JSX.Element };
};

export function MainStackNavigator(): JSX.Element {
  const MainStack = createNativeStackNavigator<MainStackParamList>();

  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }}>
      <MainStack.Screen name={Main_ScreenNames.Main} component={MainContainer} />
    </MainStack.Navigator>
  );
}
