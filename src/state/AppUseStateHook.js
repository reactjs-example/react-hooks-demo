import React from "react";
import { Counter } from "./Counter";
import Items from "./Items";
import { Person } from "./Person";

const AppUseStateHook = () => {
  return (
    <div>
      <h1>useState</h1>
      <Counter />
      <Person/>
      <Items/>
    </div>
  );
};

export default AppUseStateHook;
