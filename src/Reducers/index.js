import { initialState } from "./initialState";
import { createSlice } from "@reduxjs/toolkit"


export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    toggleModal: (state) => {
      state.isModal = !state.isModal
    },

    setDay: (state, action) => {
      state.day = action.payload
    },

    setInputValue: (state, action) => {
      state.inputValue = action.payload
    },

    setTodoItem: (state, action) => {
      state.todoItem = [...state.todoItem, ...action.payload]
    },

    deleteTodo: (state, action) => {
      state.todoItem = state.todoItem.filter((el) => el.id !== action.payload)
    }
  }
})


export const {
  toggleModal,
  setInputValue,
  setTodoItem,
  deleteTodo,
  setDay,
} = todoSlice.actions;

export const todoReducer = todoSlice.reducer