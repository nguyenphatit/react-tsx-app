import appConstant from "constants/appConstant";
import {AxiosResponse} from 'types';
import api from './api'

class TodoService {
  public static async fetchTodos(): Promise<AxiosResponse> {
    return api.get('/todos');
  }
}

export default TodoService
