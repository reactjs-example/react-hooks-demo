import React from "react";
import { useState } from "react";

export const Counter = () => {
  const value = 0;
  const increaseValue = () => {
    value = value + 1;
  };
  const [counter, setCounter] = useState(0);
  const [items, setItems] = useState([]);
  const addItem = () => {
    setItems((prevItems) => {
      return [...prevItems, { id: items.length, key: Math.random() }];
    });
  };
  return (
    <div>
      Counter: {value} - {counter}
      <button
        onClick={() => {
          increaseValue();
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCounter((prevCounter) => prevCounter - 1);
        }}
      >
        Decrease
      </button>
      <br />
      <button onClick={addItem}>Add Item To Array</button>
      {items.map((item) => (
         // without above bracket ( we have to { return (<li>/li>)}
          <li key={Math.random()}>
            {item.id} {JSON.stringify(item)}
          </li>
    
      ))}
      <br />
    </div>
  );
};
