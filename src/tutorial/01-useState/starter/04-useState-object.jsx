import { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "peter",
    age: 31,
    hobby: "dance",
  });
  const displayPerson = () => {
    setPerson({ ...person, name: "susu" });
    // setPerson({ name: "john", age: 28, hobby: "screaming" });
  };
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>Enjoys : {person.hobby}</h3>
      <button type="button" className="btn" onClick={displayPerson}>
        Show John
      </button>
    </>
  );
};

export default UseStateObject;
