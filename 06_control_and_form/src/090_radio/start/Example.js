import { useState } from "react";

const Example = () => {
  const [fruit, setFruit] = useState("Apple");
  const onChange = (e) => setFruit(e.target.value);
  const FruitRadio = ["Apple", "Banana", "Cherrey"];

  return (
    <>
      {/* <label>
        <input
          type="radio"
          value="Apple"
          checked={fruit === "Apple"}
          onChange={onChange}
        />
        Apple
      </label>
      <label>
        <input
          type="radio"
          value="Banana"
          checked={fruit === "Banana"}
          onChange={onChange}
        />
        Banana
      </label>
      <label>
        <input
          type="radio"
          value="Cherry"
          checked={fruit === "Cherry"}
          onChange={onChange}
        />
        Cherry
      </label> */}
      <h3>私は{fruit}が食べたい</h3>

      {FruitRadio.map((value) => (
        <label>
          <input
            type="radio"
            value={value}
            checked={fruit === value}
            onChange={onChange}
          />
          {value}
        </label>
      ))}
    </>
  );
};

export default Example;
