import React, { useState } from 'react';
import { ActivityIndicator, Pressable, StyleSheet, Text } from 'react-native';

type LoginButtonType = {
  authorizationUser(): void;
};

export default function LoginButton({ authorizationUser }: LoginButtonType): JSX.Element {
  const [isShowSpinner, setIsShowSpinner] = useState<boolean>(false);

  function imitationPostRequest(): void {
    setIsShowSpinner(true);
    setTimeout(() => {
      authorizationUser();
      setIsShowSpinner(false);
    }, 1000);
  }

  return (
    <Pressable
      style={({ pressed }) => [
        styles.btnLogin,
        { backgroundColor: isShowSpinner ? 'gray' : '#EC685F' },
        { opacity: pressed ? 0.5 : 1 },
      ]}
      disabled={isShowSpinner ? true : false}
      onPress={() => imitationPostRequest()}>
      {({ pressed }) => (
        <Text style={[styles.textLogin, { color: pressed ? '#EC685F' : '#fff' }]}>
          {isShowSpinner ? <ActivityIndicator color="#fff" /> : 'LOGIN'}
        </Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btnLogin: {
    marginTop: 30,
    padding: 15,
    borderRadius: 50,
  },
  textLogin: {
    textAlign: 'center',
    fontWeight: '900',
  },
});
