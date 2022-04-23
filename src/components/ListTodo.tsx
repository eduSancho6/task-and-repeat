import React from 'react';
import { Todo } from '../model';
import './styles.css';

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const ListTodo: React.FC<Props> = ({ todos, setTodos }: Props) => {
  return (
    <div className='list_todo'>
      {todos.map((t) => (
        <li key={t.id}> {t.todo} </li>
      ))}
    </div>
  );
};

export default ListTodo;
