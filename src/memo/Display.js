import React from "react";

const Display = ({ value, text }) => {
  return (
    <div>
      {text}: {value}
    </div>
  );
};

export default Display;
