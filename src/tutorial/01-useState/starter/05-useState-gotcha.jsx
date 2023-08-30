import { useState } from "react";

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);
  const handleClick = () => {
    setTimeout(() => {
      setValue((currentState) => {
        return currentState + 1;
      });
    }, 3000);
  };
  return (
    <>
      <button type="button" className="btn" onClick={handleClick}>
        click
      </button>
      <p>{value}</p>;
    </>
  );
};

export default UseStateGotcha;
