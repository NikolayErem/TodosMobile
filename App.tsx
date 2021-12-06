import React from 'react';
import RootNavigation from './src/navigation/RootNavigation';

export type TypeContext = {
  setUserIsLogin(isValue: boolean): void;
};

export const AppContext = React.createContext<TypeContext>({ setUserIsLogin: arg => arg });

const App = (): JSX.Element => {
  return <RootNavigation />;
};

export default App;
