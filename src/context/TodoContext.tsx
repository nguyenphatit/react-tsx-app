import React, { createContext } from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import { useReducer } from "react";
import todoReducer from "reducers/todoReducer";
import TodoService from "services/todo.service";
import { Actions } from "types";
import { InitialTodoStateType, TodoTypes } from "types/todo.type";

const initialState: InitialTodoStateType = {
  todos: [],
};
const TodoContext = createContext<{
  state: InitialTodoStateType;
  dispatch: React.Dispatch<Actions>;
}>({ state: initialState, dispatch: () => null });

const TodoProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const getTodoList = useCallback(async () => {
    const response = await TodoService.fetchTodos();
    dispatch({ type: TodoTypes.FETCH_TODOS, payload: response.data });
  }, []);

  useEffect(() => {
    getTodoList();
  }, [getTodoList]);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
