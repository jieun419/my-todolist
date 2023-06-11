import { configureStore } from "@reduxjs/toolkit"
import { todoReducer }  from '../Reducers'

const store = configureStore({
  reducer: {
    todo: todoReducer
  }
})

export default store