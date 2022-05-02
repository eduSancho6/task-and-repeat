import React from 'react';
import { useSelector } from 'react-redux';
import { selectTodos } from '../features/listTodo/ListTodo';
import { Todo } from '../model';
import './styles.css';
import SingleTask from './Task';

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const ListTodo: React.FC<Props> = ({ todos, setTodos }: Props) => {
  const todostodos = useSelector(selectTodos);
  return (
    <React.Fragment>
      <div className='list_todo'>
        {todostodos.map((t: any, key: any) => (
          <SingleTask key={key} todos={todos} todo={t} setTodos={setTodos} />
        ))}
      </div>
      {/* 
      <div className='list_todo'>
        {todos.map((t, key) => (
          <SingleTask key={key} todos={todos} todo={t} setTodos={setTodos} />
        ))}
      </div> */}
    </React.Fragment>
  );
};

export default ListTodo;
