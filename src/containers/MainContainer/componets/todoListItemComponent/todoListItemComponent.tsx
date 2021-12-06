import CheckBox from '@react-native-community/checkbox';
import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { TaskType } from '../../../../../store/store';

type TodoListItemComponentPropsType = {
  styles: { [key: string]: {} };
  taskIsComplite(newValue: boolean, taskId: string): void;
  taskDelete(): void;
  allTasksComplite(): void;
  allTasksDelete(): void;
  taskParams: TaskType;
  index: number;
};

export default function TodoListItemComponent({
  styles,
  taskIsComplite,
  taskDelete,
  allTasksComplite,
  allTasksDelete,
  taskParams,
  index,
}: TodoListItemComponentPropsType): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {index + 1} {taskParams.text}
      </Text>
      <View style={styles.blockBtn}>
        <CheckBox
          disabled={false}
          value={taskParams.isCheck}
          onValueChange={newValue => taskIsComplite(newValue, taskParams.id)}
        />
        <Pressable onPress={taskDelete}>
          <Image style={styles.deleteBtn} source={require('./bin.png')} />
        </Pressable>
      </View>
    </View>
  );
}
