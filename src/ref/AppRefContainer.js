import React, { useRef } from "react";

const AppRefContainer = () => {
  return (
    <div>
      <h1>useRef hook</h1>
      <InputValue />
    </div>
  );
};

/**
 * useRef used to manipulate the dom elemennt
 * @returns 
 */
const InputValue = () => {
  const inputRef = useRef();

  const handleSubmit = () => {
    console.log(inputRef.current.value);
    alert(inputRef.current.value);
    inputRef.current.value = "";
    inputRef.current.focus();
  };

  return (
    <>
      <input type="text" ref={inputRef} />
      <button onClick={handleSubmit}>Click</button>
    </>
  );
};
export default AppRefContainer;
