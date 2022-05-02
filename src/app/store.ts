import { configureStore } from '@reduxjs/toolkit';
import listTodoReducer from '../features/listTodo/ListTodo';

export default configureStore({
  reducer: {
    listTodo: listTodoReducer,
  },
});
