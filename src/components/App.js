import React from "react";
import { Provider, useSelector, useDispatch } from "react-redux";
import './../styles/App.css';
import { decrement, increment } from "./redux/CounterActions";
import { store } from "./redux/Store";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      {/* Do not remove the main div */}
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
    </div>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default App;