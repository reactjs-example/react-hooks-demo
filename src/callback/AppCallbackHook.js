import React, { useCallback, useState } from "react";
import Count from "./Count";
import MyButton from "./MyButton";
import Salary from "./Salary";

function AppCallbackHook() {
  const [count, setCount] = useState(0);
  const [salary, setSalary] = useState(100);
  const incrementCount = ()=> {
   setCount(count+1);
  };
  const incrementSalary = () => {
    setSalary(salary+100)
  };
  const useCallbackIncrementCount = useCallback(()=> {
    setCount(count+1);
   }, [count]);
  const useCallbackIncrementSalary = useCallback(()=>{setSalary(salary+100)}, [salary]);
  return (
    <div>
      <h1>useCallback</h1>

      count {count}
      salary {salary}
      <Salary value={salary}/>
      <Count value={count}/>
      <button onClick={incrementCount}>Count+</button>
      <button onClick={incrementSalary}>Salary+</button>
      <MyButton clickHandler={useCallbackIncrementCount} value='Count+'/>
      <MyButton clickHandler={useCallbackIncrementSalary} value='Salary+'/>
    </div>
  );
}

export default AppCallbackHook;
