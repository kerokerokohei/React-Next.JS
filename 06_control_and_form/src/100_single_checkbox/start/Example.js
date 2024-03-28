import { useState } from "react";

const Example = () => {
  const [isChecked, checkToggle] = useState(true);
  // const toggle = (e) => {
  //   checkToggle((prevState) => !prevState);
  // };
  return (
    <>
      <label htmlFor="check"></label>
      <input
        type="checkbox"
        id="check"
        checked={isChecked}
        onChange={() => checkToggle((prevState) => !prevState)}
      />
      <div>{isChecked ? "ON!" : "OFF!"}</div>
    </>
  );
};

export default Example;
