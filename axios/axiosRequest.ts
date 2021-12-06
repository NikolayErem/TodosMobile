import axiosClient from './axiosConfig';
import { TaskType } from '../store/store';

export enum ListURL {
  GET_TODOS = '/getAllTasks',
  CREATE_TODO = '/createNewTask',
  COMPLITE_TODO = '/compliteTask',
  DELETE_TODO = '/deleteTask?id=',
  DELETE_ALL_TODOS = '/deteteAllTasks',
  COMPLITE_ALL_TODOS = '/compliteAllTasks',
}

export class AxiosRequest {
  static GetTodos = async (): Promise<TaskType[] | undefined> => {
    try {
      const returnResponse = await axiosClient.get(ListURL.GET_TODOS);
      return returnResponse.data.data;
    } catch (error: any) {
      console.error("axios request 'Get Todos' finished error: ", error);
      throw new Error(error);
    }
  };

  static DeleteAllTodos = async (): Promise<any> => {
    try {
      await axiosClient.delete(ListURL.DELETE_ALL_TODOS);
    } catch (error: any) {
      console.error("axios request 'Delete all Todos' finished error");
      throw new Error(error);
    }
  };

  static CompliteAllTodos = async (): Promise<void> => {
    try {
      await axiosClient.patch(ListURL.COMPLITE_ALL_TODOS);
    } catch (error: any) {
      console.error("axios request 'Complite all Todos' finished error: ", error);
      throw new Error(error);
    }
  };

  static CreateTodo = async (textInput: string): Promise<TaskType | undefined> => {
    try {
      const res = await axiosClient.post(ListURL.CREATE_TODO, { text: textInput });
      return res.data;
    } catch (error: any) {
      console.error("axios request 'Create Todo' finished error: ", error);
      throw new Error(error);
    }
  };

  static CompliteTodo = async (todo: TaskType): Promise<void> => {
    try {
      await axiosClient.patch(ListURL.COMPLITE_TODO, todo);
    } catch (error: any) {
      console.error("axios request 'Complite Todo' finished error: ", error);
      throw new Error(error);
    }
  };

  static DeleteTodo = async (todoId: string): Promise<void> => {
    try {
      const deleteUrl = ListURL.DELETE_TODO + todoId;
      await axiosClient.delete(deleteUrl);
    } catch (error: any) {
      console.error("axios request 'Delete Todo' finished error: ", error);
      throw new Error(error);
    }
  };
}
