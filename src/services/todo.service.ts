import axios from "axios";
import appConstant from "constants/appConstant";
import { AxiosResponse } from "types";

class TodoService {

  public static async fetchTodos(): Promise<AxiosResponse> {
    return axios.get(`${appConstant.JSON_PLACEHOLDER_URL}todos`);
  }
}

export default TodoService
