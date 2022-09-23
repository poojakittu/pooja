import { useState, useReducer } from "react";
// 1.
import reducer from "./counterReducer";
import {
  incrementAction,
  decrementAction,
  resetAction,
  incrementByValue,
  decrementByValue
  // incrementActionByValue
} from "./counterAction";

// dispatch(action) --> reducer()  --> returns --> becomes your updated state

function Counter() {
  const [state, dispatch] = useReducer(reducer, 0);
  const [addno, setInputValue] = useState(0);
  const [decno, decInputValue] = useState(0);

  return (
    <>
      <h1>Count : {state}</h1>
      <input
        type="number"
        value={addno}
        onChange={(e) => setInputValue(Number(e.target.value))}
        placeholder="Your first name"
      />
      <button onClick={() => dispatch(incrementByValue(addno))}>
        INCREMENT BY VALUE
      </button>
      <br/> <br/>
      <input
      type="number"
      value={decno}
      onChange={(e) => decInputValue(Number(e.target.value))}
    />
     
      

      <button onClick={() => dispatch(decrementByValue(decno))}>
        DECREMENT BY VALUE
      </button>
    </>
  );
}

export default Counter;
// REDUCER - R
// ACTION - A
// DISPATCH - D

// Manager needs to give employees
// 1. existing data to work with
// 2. instructions
// 3. type of work and payload - actions

/*
    type of work and payload

    action { type: 'WAVE_HAND', payload : 'clockwise' }
    action { type: 'WAVE_HAND', payload : 'anti-clockwise' }
  */

/* 
    instructions
  */

// function Counter() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <h1>Count : {count}</h1>
//       <button onClick={handleIncrement}>INCREMENT</button>
//       <button onClick={handleDecrement}>DECREMENT</button>
//     </>
//   );
// }
