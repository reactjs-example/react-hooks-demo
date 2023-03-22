import React from "react";

const Count = ({value}) => {
  console.log("count component rendered");
  return <div>{value}</div>;
};

export default React.memo(Count);
// export default Count;
