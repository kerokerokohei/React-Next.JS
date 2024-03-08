import { useState } from "react";
const Example = () => {
  const [ val , setval ] = useState(0);
  const countUp = () => {
    setval(val => val + 1)
  }
  const countDown = () => {
    setval(val => val - 1)
  }
  return (
    <>
      <h3>練習問題</h3>
      <p>現在のカウント数: {val}</p>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </>
  );
};

export default Example;
