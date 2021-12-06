import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

type LoginTextInputType = {
  inputText: string;
  setInputText(text: string): void;
  textInPlaceholder: string;
  isErrorLogin: boolean;
  setIsErrorLogin(isValue: boolean): void;
};

export function LoginTextInput({
  inputText,
  setInputText,
  textInPlaceholder,
  isErrorLogin,
  setIsErrorLogin,
}: LoginTextInputType): JSX.Element {
  return (
    <TextInput
      style={[styles.input, isErrorLogin && styles.borderError]}
      value={inputText}
      onChangeText={setInputText}
      placeholder={`${textInPlaceholder}...`}
      onFocus={() => setIsErrorLogin(false)}
      secureTextEntry={textInPlaceholder === 'Password' ? true : false}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#49577F',
    marginBottom: 15,
    borderRadius: 50,
    padding: 15,
  },
  borderError: {
    borderWidth: 1,
    borderColor: 'red',
  },
});
