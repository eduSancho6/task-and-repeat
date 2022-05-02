import { createSlice } from '@reduxjs/toolkit';

interface Todo {
  id: number;
  todo: string;
  isDone: boolean;
}
interface InitialState {
  id: number;
  listTodo: Todo[];
}

const initialState: InitialState = {
  id: 0,
  listTodo: [],
};

export const listTodoSlice = createSlice({
  name: 'listTodo',
  initialState: initialState,
  reducers: {
    addTodo: (state, { payload }) => {
      state.listTodo.push(payload);
      state.id = state.id + 1;
    },
    removeTodo: (state, { payload }) => {
      state.listTodo = state.listTodo.filter((tod) => tod.id !== payload);
    },
  },
});

export const { addTodo, removeTodo } = listTodoSlice.actions;

export default listTodoSlice.reducer;

export const selectTodos = (state: any) => state.listTodo.listTodo;
