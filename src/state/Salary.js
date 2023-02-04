import { React } from "react";
import { useState } from "react";

export const PersonSalaray = () => {
  const [person, setPerson] = useState({ name: "John", salary: 100 });
  return (
    <div>
      Person: {JSON.stringify(person)}
      <button
        onClick={() =>
          setPerson((prevState) => { // function body
            return { ...prevState, salary: person.salary + 1 };
          })
        }
      >
        
        Increase Salary
      </button>
    </div>
  );
};
