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
