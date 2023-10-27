import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    todoValues: ["Get BMW", "Get Food", "Get Family"]
}

export const todoSlice = createSlice(
    {
        name: "todoSlice",
        initialState,
        reducers: {
            addTodo: (state, action) => { state.todoValues.push(action.payload) },
            deleteTodo: (state, action) => { state.todoValues.splice(action.payload, 1) }
        }
    }
)

export var { addTodo, deleteTodo } = todoSlice.actions;
var todoReducer = todoSlice.reducer
export default todoReducer