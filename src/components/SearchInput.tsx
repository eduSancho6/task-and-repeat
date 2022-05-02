import React, { useEffect, useId, useRef, useState } from 'react';
import './styles.css';
import { addTodo } from '../features/listTodo/ListTodo';
import { Todo } from '../model';
import { useDispatch, useSelector } from 'react-redux';

import { selectTodos } from '../features/listTodo/ListTodo';

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  addTask: (e: React.FormEvent) => void;
}

const TaskMaker: React.FC<Props> = ({ todo, setTodo, addTask }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [task, setTask] = useState('');
  const [id, setId] = useState(0);

  const dispatch = useDispatch();
  const todostodos = useSelector(selectTodos);

  console.log('Porfavor ', todostodos);
  let tasky: Todo = {
    id: Number(id),
    todo: task,
    isDone: false,
  };

  const submiting = (tasky: any) => {
    setId(id + 1);
    dispatch(addTodo(tasky));
  };

  return (
    <React.Fragment>
      <form
        className='form'
        onSubmit={(e) => {
          e.preventDefault();
          submiting(tasky);
        }}
      >
        <input
          type='input'
          placeholder='I am an input'
          className='search_input'
          value={task}
          style={{ margin: '5rem' }}
          onChange={(e) => setTask(e.target.value)}
        ></input>
        <button type='submit' className='search_button'>
          Let's GO
        </button>
      </form>
      {
        <form
          className='form'
          onSubmit={(e) => {
            addTask(e);
            inputRef.current?.blur();
          }}
        >
          <input
            ref={inputRef}
            type='input'
            placeholder='Write your next mission to success'
            className='search_input'
            value={todo}
            onChange={(e) => {
              setTodo(e.target.value);
            }}
          ></input>
          <button type='submit' className='search_button'>
            Let's GO
          </button>
        </form>
      }
    </React.Fragment>
  );
};

export default TaskMaker;
