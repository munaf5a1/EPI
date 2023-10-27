import React from 'react';
import { addTodo, deleteTodo } from "./features/todoList/todoSlice";
import { useDispatch, useSelector } from "react-redux";

function Todos() {
    var { todoValues } = useSelector((state) => (state.list))
    const dispatch = useDispatch()
    const [newTodo, setNewTodo] = React.useState("")
    console.log("todoValues", todoValues)
    return (
        <div>
            <input type="text" onChange={(e) => { setNewTodo(e.target.value) }} />
            <button onClick={() => { dispatch(addTodo(newTodo)) }}>Add todo</button>
            <ul>
                {todoValues.map((todo) => {
                    return <li>{todo}</li>
                })}
            </ul>

        </div>
    )
}

export default Todos