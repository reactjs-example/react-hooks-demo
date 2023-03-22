import React from "react";
import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(10)
  const increaseCounter = () => {
    console.log(count);
    setCount(count+1);
  };
  const decreaseCounter = ()=>{
    setCount(oldValue=>{return oldValue -1});
  }
  return (
    <>
      Counter : {count}
      <button onClick={increaseCounter}>Increment</button>
      <button onClick={decreaseCounter}>Decrement</button>
      <button onClick={()=>{setCount(count-1)}}>Decrement</button>
      <button onClick={()=>{setCount(oldValue=>{return oldValue-1})}}>Decrement</button>
    </>
  );
};
