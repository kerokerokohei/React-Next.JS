import { useState } from "react";

const Form = ({ addnewTask }) => {
  const [text, setText] = useState();
  const changeValue = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <input onChange={changeValue} value={text} />
      <button onClick={addnewTask}>追加</button>
    </>
  );
};

export default Form;
