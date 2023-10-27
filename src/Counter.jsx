import React from 'react';
import { inc, dec, res } from "./features/counter/counterSlice";
import { useDispatch, useSelector } from "react-redux";

function Counter() {
    var { count } = useSelector((state) => { return state.count })
    // console.log(counted)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={() => { dispatch(inc()) }}>Increment</button>
            <button onClick={() => { dispatch(dec()) }}>Decrement</button>
            <button onClick={() => { dispatch(res()) }}>Res</button>
        </div>
    )
}

export default Counter