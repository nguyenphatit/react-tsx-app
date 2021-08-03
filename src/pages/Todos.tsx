import TodoList from "components/TodoList";
import { TodoContext } from "context/TodoContext";
import { useContext } from "react";

const Todos: React.FC = () => {
  const { state } = useContext(TodoContext)

  return (
    <>
      <h1>Todos</h1>
      <TodoList data={state.todos} />
    </>
  )
}

export default Todos;
