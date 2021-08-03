import { TodoType } from "types/todo.type";
import TodoCard from "./TodoCard";

interface Props {
  data: TodoType[];
}

const TodoList: React.FC<Props> = ({ data }) => (
  <>
    {data?.map((todo: TodoType) => (
      <TodoCard key={todo.id} data={todo} />
    ))}
  </>
);

export default TodoList;
