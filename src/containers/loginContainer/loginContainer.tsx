import React, { useContext, useState } from 'react';
import { StyleSheet } from 'react-native';
import { AppContext, TypeContext } from '../../../App';
import { verificationUser } from '../../navigation/verificationUser';
import LoginComponent from './loginComponent/loginComponent';

export default function LoginContainer(): JSX.Element {
  const [isErrorLogin, setIsErrorLogin] = useState<boolean>(false);
  const [emailInputText, setEmailInputText] = useState<string>('');
  const [passwordInputText, setPasswordInputText] = useState<string>('');
  const loginContext: TypeContext = useContext<TypeContext>(AppContext);

  function authorizationUser(): void {
    if (verificationUser(emailInputText, passwordInputText)) {
      loginContext.setUserIsLogin(true);
    } else {
      setIsErrorLogin(true);
    }
  }

  return (
    <LoginComponent
      authorizationUser={authorizationUser}
      isErrorLogin={isErrorLogin}
      setIsErrorLogin={setIsErrorLogin}
      setEmailInputText={setEmailInputText}
      setPasswordInputText={setPasswordInputText}
      emailInputText={emailInputText}
      passwordInputText={passwordInputText}
      styles={styles}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#143E5A',
    padding: 30,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '50%',
  },
  textTitle: {
    color: '#EC685F',
    fontSize: 64,
    fontWeight: '900',
    textAlign: 'center',
    paddingBottom: 40,
  },
});
