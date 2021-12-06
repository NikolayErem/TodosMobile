import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { LoginStackNavigator } from './loginStackNavigator/loginStackNavigator';
import { MainStackNavigator } from './mainStackNavigator/mainStackNavigator';
import { AppContext } from '../../App';

export default function RootNavigation(): JSX.Element {
  const [userIsLogin, setUserIsLogin] = useState<boolean>(false);

  return (
    <AppContext.Provider value={{ setUserIsLogin }}>
      <NavigationContainer>
        {userIsLogin ? <MainStackNavigator /> : <LoginStackNavigator />}
      </NavigationContainer>
    </AppContext.Provider>
  );
}
