import { useState } from "react"

const Example = () => {
  const numArray = [1, 2, 3, 4, 5];
  const [nums, setnums] = useState(numArray);
  const shufflenums = () => {
    const newNums = [ ...nums ];
    const value = newNums.pop();
    newNums.unshift(value);
    setnums(newNums);
  }
  return (
    <>
      <h3>{nums}</h3>
      <button onClick={shufflenums}>shufle</button>
    </>
  );
};

export default Example;
