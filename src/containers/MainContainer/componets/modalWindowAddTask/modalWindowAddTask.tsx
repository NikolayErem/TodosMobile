import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { AxiosRequest } from '../../../../../axios/axiosRequest';
import appState from '../../../../../store/store';

type ModalWindowAddTaskPropsType = {
  modalIsVisible: boolean;
  setModalIsVisible(isValue: boolean): void;
};

const ModalWindowAddTask = observer(
  ({ modalIsVisible, setModalIsVisible }: ModalWindowAddTaskPropsType): JSX.Element => {
    let [inputText, setInputText] = useState<string>('');

    async function AddTask(): Promise<void> {
      if (inputText.trim()) {
        const newTask = await AxiosRequest.CreateTodo(inputText);
        appState.createNewTask(newTask);
        setModalIsVisible(false);
      }
      setInputText('');
    }
    return (
      <Modal animationType="slide" transparent={true} visible={modalIsVisible}>
        <View style={styles.modalWindow}>
          <TextInput
            placeholder="Write the task"
            value={inputText}
            onChangeText={text => setInputText(text)}
          />
          <Pressable onPress={AddTask} style={styles.modalBtn}>
            <Text style={styles.modalBtnText}>Add new Task</Text>
          </Pressable>
        </View>
      </Modal>
    );
  },
);

const styles = StyleSheet.create({
  modalWindow: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    width: '90%',
    height: 200,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,
    elevation: 18,
    marginVertical: 50,
  },
  modalInput: {
    backgroundColor: 'gray',
  },
  modalBtn: {
    backgroundColor: '#68A9D8',
    padding: 10,
    borderRadius: 10,
  },
  modalBtnText: {
    color: '#fff',
  },
});

export default ModalWindowAddTask;
