import React, { ReactEventHandler, useState } from 'react';
import { Todo } from '../model';
import { ImPencil, ImBin, ImCheckmark } from 'react-icons/im';
import './styles.css';

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  key?: number;
}

const SingleTask = ({ todos, todo, setTodos, key }: Props) => {
  const [edit, setEdit] = useState(false);
  const [editTodo, setEditTodo] = useState(todo.todo);

  const completeTask = (id: number) => {
    setTodos(
      todos.map((task) =>
        task.id === id ? { ...todo, isDone: !todo.isDone } : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTodos(todos.filter((task) => task.id !== id));
  };

  const editTask = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((task) => (task.id === id ? { ...todo, todo: editTodo } : task))
    );
    setEdit(false);
  };

  return (
    <form
      className='singleTask_container'
      onSubmit={(e) => editTask(e, todo.id)}
    >
      {edit ? (
        <input
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
        ></input>
      ) : todo.isDone ? (
        <s className='singleTask' key={key}>
          {' '}
          {todo.todo}{' '}
        </s>
      ) : (
        <p className='singleTask' key={key}>
          {' '}
          {todo.todo}{' '}
        </p>
      )}

      <ImPencil
        className='icon_item pencil'
        style={{ color: 'rgb(158, 56, 113)' }}
        onClick={() => setEdit(!edit)}
      />
      <ImCheckmark
        className='icon_item chack'
        style={{ color: 'green', fontWeight: 'bold' }}
        onClick={() => completeTask(todo.id)}
      />
      <ImBin
        className='icon_item bin'
        style={{ color: 'red' }}
        onClick={() => deleteTask(todo.id)}
      />
    </form>
  );
};

export default SingleTask;
