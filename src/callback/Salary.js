import React from "react";

const Salary = ({value}) => {
  console.log("salary component called");
  return <div>{value}</div>;
};

export default React.memo(Salary);
//export default Salary;
