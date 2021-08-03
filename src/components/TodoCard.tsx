import styled from "styled-components";
import { TodoType } from "types/todo.type";

interface Props {
  data: TodoType;
}

const Card = styled.div<{completed: boolean}>`
  margin-bottom: 20px;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgb(0 0 0 / 15%), 0 1px 1px rgb(0 0 0 / 12%);
  padding: 20px;
  background: ${({ completed }) => completed ? '#FFF6B7' : '#F8D800'};
  text-decoration: ${({ completed }) => completed ? 'line-through' : 'none'};
  cursor: pointer;
`;

const TodoCard: React.FC<Props> = ({ data }) => (
  <Card completed={data.completed}>
    {data.title}
  </Card>
);

export default TodoCard;
