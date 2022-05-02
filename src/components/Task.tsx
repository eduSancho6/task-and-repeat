import React, { useEffect, useRef, useState } from 'react';
import { Todo } from '../model';
import { ImPencil, ImBin, ImCheckmark } from 'react-icons/im';
import './styles.css';
import { useDispatch } from 'react-redux';
import { removeTodo } from '../features/listTodo/ListTodo';

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  key?: number;
}

const SingleTask = ({ todos, todo, setTodos, key }: Props) => {
  const [edit, setEdit] = useState(false);
  const [editTodo, setEditTodo] = useState(todo.todo);

  const dispatch = useDispatch();

  /*   const completeTask = (id: number) => {
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

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  console.log('INPUTREF', inputRef); */
  return (
    <div>
      <form
        className='singleTask_container'
        // onSubmit={(e) => editTask(e, todo.id)}
      >
        {edit ? (
          <input
            value={editTodo}
            onChange={(e) => setEditTodo(e.target.value)}
            // ref={inputRef}
          ></input>
        ) : todo.isDone ? (
          <s className='singleTask'> {todo.todo} </s>
        ) : (
          <p className='singleTask'> {todo.todo} </p>
        )}

        <ImPencil
          className='icon_item pencil'
          style={{ color: 'rgb(158, 56, 113)' }}
          // onClick={() => setEdit(!edit)}
        />
        <ImCheckmark
          className='icon_item chack'
          style={{ color: 'green', fontWeight: 'bold' }}
          // onClick={() => completeTask(todo.id)}
        />
        <ImBin
          className='icon_item bin'
          style={{ color: 'red' }}
          // onClick={() => deleteTask(todo.id)}
          onClick={() => dispatch(removeTodo(todo.id))}
        />
      </form>
    </div>
  );
};

export default SingleTask;
