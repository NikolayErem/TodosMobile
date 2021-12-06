import { observer } from 'mobx-react-lite';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type TodoListBtnPropsType = {
  setModalIsVisible(isValue: boolean): void;
};

const TodoListBtn = observer(({ setModalIsVisible }: TodoListBtnPropsType) => {
  return (
    <View>
      <Pressable style={styles.btn_add} onPress={() => setModalIsVisible(true)}>
        <Text style={styles.btn_text}>+</Text>
      </Pressable>
    </View>
  );
});

const styles = StyleSheet.create({
  btn_add: {
    backgroundColor: '#68A9D8',
    width: 60,
    height: 60,
    borderRadius: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    margin: 5,
    position: 'absolute',
    zIndex: 2,
    right: 20,
    bottom: 20,
  },
  btn_text: {
    color: '#fff',
    fontSize: 32,
  },
});

export default TodoListBtn;
