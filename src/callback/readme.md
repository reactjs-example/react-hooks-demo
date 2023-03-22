useCallback Hook in react
* It is used with React.memo
* React.memo prevents rendering a component if the props or state of component unchanged.
* To understand useCallback with React.memo we will take parent and child component example
* As functions are getting recreated on Component re-render they are being passed to child component will cause child component to re-render (even though child component uses React.memo). So `useCallback` for such functions or handlers.

## Design Functional Components
* AppCallbackHook.js (Parent component)
* Count.js (Child): Displays the current count only
* Salary.js (Child): Displays the current salary only
* MyButton.js (Child): Displays a button and will have clickEvent handler

Count.js
```jsx
import React from "react";

const Salary = ({value}) => {
  console.log("salary component called");
  return <div>{value}</div>;
};
export default Salary;
```
Salary.js
```jsx
import React from "react";

const Salary = ({value}) => {
  console.log("salary component called");
  return <div>{value}</div>;
};
export default Salary;
```
MyButton.js
```jsx
import React from "react";

const MyButton = ({ clickHandler, value }) => {
  console.log(clickHandler, value, "rendered");
  return (
    <div>
      <button onClick={clickHandler}>{value}</button>
    </div>
  );
};
export default MyButton;
```
AppCallbackHook.js
```jsx
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
  
  return (
    <div>
      <h1>useCallback</h1>

      count {count}
      salary {salary}
      <Salary value={salary}/>
      <Count value={count}/>
      <button onClick={incrementCount}>Count+</button>
      <button onClick={incrementSalary}>Salary+</button>
      <MyButton clickHandler={incrementCount} value='Count+'/>
      <MyButton clickHandler={incrementSalary} value='Salary+'/>
    </div>
  );
}

export default AppCallbackHook;

```

> The input type button added in Parent Component just to show the state changes on button click. We are not discussing about them in this example.

```html
<button onClick={incrementCount}>Count+</button>
      <button onClick={incrementSalary}>Salary+</button>
```

As a defualt behaviour when the parent component renders first time, all child component also renders.
And we see below logs
```text
salary component called
count component rendered
 () => {
    setCount(count + 1);
  } 'Count+' 'rendered'
 () => {
    setCount(count + 1);
  } 'Salary+' 'rendered'
```

Now we will increment the count.
```text
salary component called
count component rendered
MyButton.js:4 () => {
    setCount(count + 1);
  } 'Count+' 'rendered'
MyButton.js:4 () => {
    setCount(count + 1);
  } 'Salary+' 'rendered'
```
We are seeing that all child components getting rendered. But actually only Count component should rendered.
Same behaviour can be observed when we increase the salary.

> So to solve the re-rendering when react props or state of the component changes we can use `React.memo()`

So we will wrap each child component with React.memo() as shown below:
```jsx
export default React.memo(Count);
export default React.memo(Salary);
export default React.memo(MyButton);
```
> Now when we increase count, only the count component will be rendered.

```text
count component rendered
MyButton.js:4 () => {
    setCount(count + 1);
  } 'Count+' 'rendered'
MyButton.js:4 () => {
    setCount(count + 1);
  } 'Salary+' 'rendered'
```

From logs above we see MyButton component getting called each time count value changes, this is because of 
* Parent component gets rendered
* The handler functions present in Parent component gets created on each render
* So React.memo(MyButton) sees a different handler function and allows the MyButton component to render again

> To fix this issue we have to use `useCallback` hook for the handlers in Parent component.

```jsx
 const useCallbackIncrementCount = useCallback(()=> {
    setCount(count+1);
   }, [count]);
  const useCallbackIncrementSalary = useCallback(()=>{setSalary(salary+100)}, [salary]);
```

Assign above handlers to MyButton component props.

```html
 <MyButton clickHandler={useCallbackIncrementCount} value='Count+'/>
      <MyButton clickHandler={useCallbackIncrementSalary} value='Salary+'/>

```


