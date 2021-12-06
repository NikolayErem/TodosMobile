import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import LoginContainer from '../../containers/loginContainer/loginContainer';
import { Login_ScreenNames } from '../ScreenNames';

type LoginStackParamList = {
  LoginScreen: { name: string; component: JSX.Element };
};

export function LoginStackNavigator(): JSX.Element {
  const LoginStack = createNativeStackNavigator<LoginStackParamList>();

  return (
    <LoginStack.Navigator screenOptions={{ headerShown: false }}>
      <LoginStack.Screen name={Login_ScreenNames.LOGIN} component={LoginContainer} />
    </LoginStack.Navigator>
  );
}
