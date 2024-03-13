import { useState } from "react";

const Example = () => {
  const numArray = [1, 2, 3, 4, 5];
  const [nums, setnums] = useState(numArray);
  const shufflenums = () => {
    const newNums = [...nums];
    const value = newNums.pop(); // 配列の末尾を取得
    newNums.unshift(value); // 配列の先頭に追加
    setnums(newNums);
  };
  return (
    <>
      <h3>{nums}</h3>
      <button onClick={shufflenums}>shufle</button>
    </>
  );
};

export default Example;
