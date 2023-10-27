import React from 'react';
import { addTodo, deleteTodo } from "./features/todoList/todoSlice";
import { useDispatch, useSelector } from "react-redux"

function Todo() {
    var { list } = useSelector((state) => { state.list })
    // console.log(list)
    return (
        <div>Todo</div>
    )
}

export default Todo