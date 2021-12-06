import React from 'react';
import { SafeAreaView, ScrollView, Text } from 'react-native';
import LoginButton from '../components/loginButton/loginButton';
import LoginStatusProccess from '../components/loginStatusProccess/LoginStatusProccess';
import { LoginTextInput } from '../components/loginTextInput/loginTextInput';

type LoginComponentType = {
  authorizationUser(): void;
  isErrorLogin: boolean;
  setIsErrorLogin(isValue: boolean): void;
  emailInputText: string;
  setEmailInputText(text: string): void;
  passwordInputText: string;
  setPasswordInputText(text: string): void;
  styles: { [key: string]: any };
};

export default function LoginComponent({
  authorizationUser,
  isErrorLogin,
  setIsErrorLogin,
  emailInputText,
  setEmailInputText,
  passwordInputText,
  setPasswordInputText,
  styles,
}: LoginComponentType): JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView scrollEnabled={false} style={styles.container}>
        <Text style={styles.textTitle}>HeyAPP</Text>
        <LoginTextInput
          inputText={emailInputText}
          setInputText={setEmailInputText}
          textInPlaceholder={'Email'}
          isErrorLogin={isErrorLogin}
          setIsErrorLogin={setIsErrorLogin}
        />
        <LoginTextInput
          inputText={passwordInputText}
          setInputText={setPasswordInputText}
          textInPlaceholder={'Password'}
          isErrorLogin={isErrorLogin}
          setIsErrorLogin={setIsErrorLogin}
        />
        <LoginStatusProccess
          emailInputText={emailInputText}
          passwordInputText={passwordInputText}
          isErrorLogin={isErrorLogin}
        />
        <LoginButton authorizationUser={authorizationUser} />
      </ScrollView>
    </SafeAreaView>
  );
}
