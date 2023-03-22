import React, { useState } from "react";

const Items = () => {
  const [items, setItems] = useState([]);
  const addItems = () => {
    return setItems((prev) => {
      return [...prev, { id: items.length, key: Math.random() }];
    });
  };
  return (
    <div>
      <button onClick={addItems}>Add Item</button>
      <ul>
        {items.map((e) => {
          return <li key={e.key}>{JSON.stringify(e)}</li>;
        })}
      </ul>
    </div>
  );
};

export default Items;
