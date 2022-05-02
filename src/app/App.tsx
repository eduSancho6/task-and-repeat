import React, { useState } from 'react';
import '../App.css';
import ListTodo from '../components/ListTodo';
import TaskMaker from '../components/SearchInput';
import { Todo } from '../model';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);

  /*for update: event: React.ChangeEvent 
    for submit: event: React.FormEvent 
    for click: event: React.MouseEvent
   */
  const addTask = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo('');
    }
  };

  return (
    <div className='App'>
      <span className='name_app'> Task and Repeat</span>
      <TaskMaker todo={todo} setTodo={setTodo} addTask={addTask} />
      <ListTodo todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
