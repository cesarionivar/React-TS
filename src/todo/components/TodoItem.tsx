import { useTodos } from '../hooks/useTodos';
import { Todo } from '../interfaces/interfaces';

interface Props {
  todo: Todo;
}

export const TodoItem = ({ todo }: Props) => {
  const { toggleTodo } = useTodos();

  return (
    <li
      style={{
        cursor: 'pointer',
        textDecoration: todo.completed ? 'line-through' : '',
      }}
      onDoubleClick={() => toggleTodo(todo.id)}
    >
      {todo.desc}
    </li>
  );
};
