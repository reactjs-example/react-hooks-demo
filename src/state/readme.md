useState used to re-render the component on state change

## useState with primitive value
---
For example below code will increase the count but wont re-render the component to reflect the incremental value on each button click.
So UI will show only the intial value i.e 10.
But logs will keep incrementing the count on each button click.

```jsx
import React from "react";
import { useState } from "react";

export const Counter = () => {
  let count = 10;
  const increaseCounter = () => {
    console.log(count);
    count = count + 1;
  };
  return (
    <>
      <h1>useState</h1>
      Counter : {count}
      <button onClick={increaseCounter}>Button</button>
    </>
  );
};

```
We can use the useState hook here to reflect the counter changes.

```jsx
 const [count, setCount] = useState(10)
  const increaseCounter = () => {
    console.log(count);
    setCount(count+1);
  };
```
Now with each click the UI will be re-rendered and reflect the incremental value.

Similarly we can add for decrement of counter value.

## useState hook with array of elements
For arrays we have to copy the previous and append the new element.

```jsx
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

```


## useSate with object
---
We have to copy the previous state of the object and
the required changes.

```jsx
import { React } from "react";
import { useState } from "react";

export const Person = () => {
  const [person, setPerson] = useState({ name: "John", salary: 100 });
  const increaseSalary = () => {
    setPerson((prev) => {
      return { ...prev, salary: prev.salary + 1 };
    });
  };

  return (
    <div>
      Person: {JSON.stringify(person)}
      <button onClick={increaseSalary}>Increase Salary</button>
    </div>
  );
};

```