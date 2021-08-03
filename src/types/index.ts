import { TodoPayloadType } from "./todo.type";

export interface AxiosResponse extends Response {
  readonly data?: any;
}

export type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export type Actions = ActionMap<TodoPayloadType>[keyof ActionMap<TodoPayloadType>]

