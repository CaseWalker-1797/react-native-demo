import { createSlice } from '@reduxjs/toolkit';

let counter=0;

const addTodo = createSlice({
  name: 'todoItems',
  initialState: [],
  reducers: {
    addTodoItem: (state, action) => {
      console.log('act' + JSON.stringify(action));
      state.push({
        id: counter++,
        text: action.payload.isTitle,
        description: action.payload.isDescription,
        done: false,
      });
    },
    toggleTodoItem: (state, action) => {
      const todoItem = state.find((todoItem) => todoItem.id === action.payload);
      if (todoItem) todoItem.done = !todoItem.done;
    },
  },
});

export const { addTodoItem,toggleTodoItem } = addTodo.actions;
export default addTodo.reducer;
