import React from 'react';
import { Todo } from '../model';
import './styles.css';
import SingleTask from './Task';

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const ListTodo: React.FC<Props> = ({ todos, setTodos }: Props) => {
  return (
    <div className='list_todo'>
      {todos.map((t, key) => (
        <SingleTask key={key} todos={todos} todo={t} setTodos={setTodos} />
      ))}
    </div>
  );
};

export default ListTodo;
