import { useState } from "react";

const Example = () => {
  const personObj = { name: "Tom", age: 18 };
  const [ obj, setObj ] = useState(personObj);
  const changeName = (e)  => {
    setObj({ name: e.target.value, age: obj.age})
  }
  const changeAge = (e)  => {
    setObj({ name: obj.name, age: e.target.value})
  }

  const reset = () => {
    setObj({ name: "", age: "" })
  }

  return(
    <>
      <h3>Name: {obj.name}</h3>
      <h3>Age: {obj.age}</h3>
      <input type="text" value={obj.name} onChange={changeName} />
      <input type="number" value={obj.age} onChange={changeAge} />
      <div>
        <button onClick={reset}>リセット</button>
      </div>
    </>
  )
};

export default Example;
