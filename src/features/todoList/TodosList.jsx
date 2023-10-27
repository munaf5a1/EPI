import React from 'react'
import { addTodo, deleteTodo } from "./features/todoList/todoSlice";
import { useDispatch, useSelector } from "react-redux"

function TodosList() {
    var { list } = useSelector((state) => { state.list })
    console.log("list", list)
    return (
        <div>todosList</div>
    )
}

export default TodosList