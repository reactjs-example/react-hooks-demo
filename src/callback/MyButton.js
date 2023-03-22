import React from "react";

const MyButton = ({ clickHandler, value }) => {
  console.log(clickHandler, value, "rendered");
  return (
    <div>
      <button onClick={clickHandler}>{value}</button>
    </div>
  );
};
export default React.memo(MyButton);
//export default MyButton;