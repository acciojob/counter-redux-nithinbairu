
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import './../styles/App.css';
import { decrement, increment } from "./redux/CounterActions";

const App = () => {
  const count=useSelector((state)=>state.count);
  const disptach=useDispatch()
  return (
    <div>
        {/* Do not remove the main div */}
        <h1>{count}</h1>
        <button onClick={()=>disptach(increment())}>increment</button>
        <button onClick={()=>disptach(decrement())}>decrement</button>
    </div>
  )
}

export default App
