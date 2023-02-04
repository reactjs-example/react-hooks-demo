import React from "react";
import { useState, useEffect } from "react";

export const EffectCounter = () => {
  const [counter, setCounter] = useState(0);

  // useEffect runs twice with strict mode on in index.js in dev environment but not in production
  // on each render of component useEffect executes

  useEffect(() => {
    console.log("will always render on any state change");
  });
  
  useEffect(() => {
    console.log("counter value 1: ", counter);
    incrementCounter(); // this is safe because it does a state change but it wont render as the array is []
  }, []); // it will execute on first render only once. it is not observing state change

  useEffect(() => {
    console.log("counter value 2: ", counter);
    // incrementCounter(); // this should be avoided because this call does state change. and each time state chnages
    // useEffect gets executed as it knows that counter is changing, which will lead to infinite loop
  }, [counter]); // this executes when counter state changes

  const incrementCounter = () => {
    setCounter((prevCounter) => {
      return prevCounter + 1;
    });
  };

  return (
    <div>
      Counter: {counter}
      <button onClick={incrementCounter}>Increase</button>
    </div>
  );
};
