import { Actions } from "types";
import { InitialTodoStateType, TodoTypes } from "types/todo.type";

const todoReducer = (state: InitialTodoStateType, action: Actions) => {
  switch (action.type) {
    case TodoTypes.FETCH_TODOS:
      return { ...state, todos: action.payload }
    case TodoTypes.CHANGE_STATUS:
      return { ...state, todo: action.payload }
    default:
      return state;
  }
}

export default todoReducer
