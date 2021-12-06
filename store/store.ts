import {makeAutoObservable} from 'mobx';

export interface TaskType {
  text: string;
  id: string;
  _id: string;
  isCheck: Boolean;
}

export interface StateType {
  tasksIsSelect: boolean;
  tasks: Array<TaskType>;
  changeTasksIsSelect(isValue: boolean): void;
  changeisCheck(isValue: boolean, taskId: string): void;
  createNewTask(task: TaskType): void;
  loadTasks(tasks: TaskType[]): void;
  deleteTask(taskId: string): void;
  compliteAllTasks(): void;
  deleteAllTasks(): void;
}

class State {
  tasksIsSelect: boolean = true;
  tasks: TaskType[] = [];
  constructor() {
    makeAutoObservable(this);
  }

  changeTasksIsSelect(isValue: boolean): void {
    this.tasksIsSelect = isValue;
  }

  changeisCheck(isValue: boolean, taskId: string): void {
    this.tasks.forEach((task: TaskType) => {
      if (task._id === taskId) {
        task.isCheck = isValue;
      }
    });
  }
  createNewTask(task: TaskType): void {
    this.tasks.push(task);
  }
  loadTasks(tasks: TaskType[]): void {
    this.tasks = [...tasks];
  }
  deleteTask(taskId: string): void {
    this.tasks = [...this.tasks.filter(task => task.id !== taskId)];
  }
  compliteAllTasks() {
    const newArr = this.tasks.map(task => {
      if (task.isCheck === false) {
        task.isCheck = true;
      }
      return task;
    });
    this.tasks = newArr;
  }
  deleteAllTasks() {
    this.tasks = [];
  }
}

const appState: StateType = new State();

export default appState;
