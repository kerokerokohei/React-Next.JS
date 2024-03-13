import { useState } from "react";

const Example = () => {
  console.log(<Example />);
  const [countA, setCountA] = useState(0);
  const [countD, setCountD] = useState(10);
  const [countF, setCountF] = useState(100);
  return (
    <>
      <p> number of pushed button : {countA}</p>
      <button
        onClick={() => {
          setCountA(countA + 1);
        }}
      >
        countA
      </button>
      <p> number of pushed button : {countD}</p>
      <button
        onClick={() => {
          setCountD(countD + 1);
        }}
      >
        countD
      </button>
      <p> number of pushed button : {countF}</p>
      <button
        onClick={() => {
          setCountF(countF + 1);
        }}
      >
        countF
      </button>
    </>
  );
};

export default Example;
