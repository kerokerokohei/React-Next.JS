import { useState } from "react";

const animals = ["Dog", "Cat", "Rat"];

const Example = () => {
  const [Filterval, setfilterval] = useState("");
  return (
    <>
      <h3>配列のフィルター</h3>
      <input type="text"  value={Filterval} onChange={(e) => setfilterval(e.target.value)}/>
      <ul>
        {animals
          .map((animal) => (
          <li>{animal}</li>
        ))}
      </ul>
    </>
  );
};

export default Example;
