export type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export type InitialTodoStateType = {
  todos: TodoType[];
};

export enum TodoTypes {
  FETCH_TODOS = 'FETCH_TODOS',
  CHANGE_STATUS = 'CHANGE_STATUS'
}

export type TodoPayloadType = {
  [TodoTypes.FETCH_TODOS]: TodoType[];
  [TodoTypes.CHANGE_STATUS]: TodoType;
}
