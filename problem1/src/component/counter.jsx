 import { useReducer } from "react";
import reducer from "./Reducer"
import {inc,dec,reset,increment,decrement} from "./ReducerLogic"
function Counter(){
  const[state1,dispatch1]=useReducer(reducer,{
    count:0,
    isAuth:true,
    todo:[]
  
  })
  
  
  return(
    <>
    <h1>Count:{state1.count}
      </h1>
      <button onClick={()=>dispatch1(inc(1000))}>INCREMENT_BY_1000</button><br/><br/>
      <button disabled={state1<=0} onClick={()=>dispatch1(dec(1000))}>
        DECREMENT_BY_1000</button><br/><br/>
      <br/>
      <br/>
      {/* <h1>Count:{state1.count}</h1> */}
      <br/>
      <br/>
      <button onClick={()=>dispatch1(inc(2000))}>INCREMENT_BY_2000</button><br/><br/>
      <button disabled={state1<=0} onClick={()=>dispatch1(dec(2000))}>
        DECREMENT_BY_2000</button><br/><br/>
      <button onClick={()=>dispatch1(reset)}>Reset</button><br/>
     
    </>
  )
}
export default Counter;