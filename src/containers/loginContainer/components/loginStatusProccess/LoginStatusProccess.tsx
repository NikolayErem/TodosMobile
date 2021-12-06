import React from 'react';
import { StyleSheet, Text } from 'react-native';

type LoginStatusProccessType = {
  emailInputText: string;
  passwordInputText: string;
  isErrorLogin: boolean;
};

export default function LoginStatusProccess({
  emailInputText,
  passwordInputText,
  isErrorLogin,
}: LoginStatusProccessType): JSX.Element {
  return (
    <>
      <Text style={styles.textStatus}>
        {isErrorLogin && emailInputText.length && passwordInputText.length
          ? 'Error: You entered incorrect data \n'
          : ''}
        {isErrorLogin && !emailInputText.length ? 'Error: You entered empty email \n' : ''}
        {isErrorLogin && !passwordInputText.length ? 'Error: You entered empty password' : ''}
      </Text>
    </>
  );
}

const styles = StyleSheet.create({
  textStatus: {
    textAlign: 'center',
    padding: 5,
    color: 'red',
  },
});
