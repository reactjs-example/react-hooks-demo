import { React, useMemo } from "react";
import Display from "./Display";
import { useState } from "react";

const AppMemoHook = () => {
  const [count, setCount] = useState(2);
  const [salary, setSalary] = useState(300);
  const sqrFunc = () => {
    console.log("evaluating sqaure");
    return Math.pow(count, 2);
  };
  /**
   * below sqrValue gets evaluated on each re-render when the salary changes also
   */
  const sqrValue = sqrFunc();
  /**
   * below sqrValue is memorized for the count value
   *
   * on re-render due to change in salary,
   * the sqrValue wont be evaluated as count is not changing
   *
   */
  const sqrValueMemo = useMemo(() => {
    console.log("memo called");
    return sqrFunc();
  }, [count]);

  const handleClickCount = () => {
    setCount(count + 1);
  };
  const handleClickSalary = () => {
    setSalary(salary + 100);
  };

  const sumResultFunc = () => {
    console.log("sum result");
    let sum = 0;
    for (let i = 0; i <= 10; i++) {
      sum = sum + i;
    }
    return sum;
  };
  const sumResult = sumResultFunc();
  const sumResult1 = useMemo(sumResultFunc, []);
  return (
    <div>
      <h1>Use MemoHook</h1>
      <Display value={sqrValue} text="SQR_VALUE" />
      <Display value={sqrValueMemo} text="SQR_VALUE_1" />
      <Display value={salary} text="SALARY" />
      <Display value={sumResult} text="FIRST_SUM" />
      <Display value={sumResult1} text="SECOND_SUM" />
      <button onClick={handleClickCount}>Increment Count</button>
      <button onClick={handleClickSalary}>Increment Salary</button>
    </div>
  );
};

export default AppMemoHook;
